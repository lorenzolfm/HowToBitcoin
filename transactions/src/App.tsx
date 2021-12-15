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

  const renderTransactions = transactions.map(tx => {
    return (
      <div className="ui card" key={tx.txid} style={{ width: '100%' }}>
        <TransactionCard tx={tx} onAddressClicked={setSelectedAddr} />
        {selectedAddr && <AddrTxCard txCount={txCount} address={selectedAddr}/>}
      </div>
    )
  });

  return (
    <div className="ui container" style={{ marginTop: 20 }}>
      <SearchBar value={txId} onChange={setTxId} onSearch={handleSearch} />
      {renderTransactions}
    </div>
  );
};
