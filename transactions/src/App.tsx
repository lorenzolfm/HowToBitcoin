import { useState } from 'react';

import { SearchBar } from './components/SearchBar';
import { TransactionCard } from './components/TransactionCard/';

import { Transaction } from './types';
import { getTxIdInfo } from './utils';

export const App = () => {
  const [txId, setTxId] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleSearch = () => getTxIdInfo(txId, transactions, setTransactions);

  const renderTransactions = transactions.map(tx => {
    return <TransactionCard key={tx.txid} tx={tx} onAddressClicked={(addr) => console.log(addr)} />;
  });

  return (
    <div className="ui container" style={{ marginTop: 20 }}>
      <SearchBar value={txId} onChange={setTxId} onSearch={handleSearch} />
      {renderTransactions}
    </div>
  );
};
