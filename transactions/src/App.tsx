import { useState, useEffect } from 'react';

import { SearchBar } from './components/SearchBar';
import { TransactionCard } from './components/TransactionCard/';
import { AddrTxCard } from './components/AddrTxCard';

import { Transaction } from './types';
import { getAddrTxCount, getTxIdInfo } from './utils';

export const App = () => {
  const [txId, setTxId] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedAddr, setSelectedAddr] = useState<string|null>(null);
  const [txCount, setTxCount] = useState<number>(0);

  useEffect(() => {
    const getTxCount = async () => {
      if (selectedAddr)
        setTxCount(await getAddrTxCount(selectedAddr));
    }
    getTxCount();
  }, [selectedAddr]);

  const handleSearch = () => getTxIdInfo(txId, transactions, setTransactions);

  const handleTxIdClick = (txId: string) => {
    const hasTxId = transactions.filter(t => t.txid === txId).length !== 0;

    if (hasTxId) {
      return
    }

    getTxIdInfo(txId, transactions, setTransactions);
  }

  const renderTransactions = transactions.map(tx => {
    return (
      <div className="ui card" key={tx.txid} style={{ width: '100%' }}>
        <TransactionCard
          tx={tx}
          onTxIdClicked={handleTxIdClick}
          onAddressClicked={setSelectedAddr} 
        />
        {selectedAddr && <AddrTxCard txCount={txCount} address={selectedAddr}/>}
      </div>
    )
  });

  return (
    <div className="ui container" style={{ marginTop: 20, width: '90%' }}>
      <SearchBar value={txId} onChange={setTxId} onSearch={handleSearch} />
      {renderTransactions}
    </div>
  );
};
