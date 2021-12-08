import { useState } from 'react';
import axios from 'axios';

import { SearchBar } from './SearchBar';
import { TransactionCard } from './TransactionCard';

import { Transaction } from './types';

/* Transaction Chain Visualizer
 *
 * User enters a txId
 * Systems gets the transactions and displays it
 * Then searches for transactions inputs who have spent the previous output
 *
*/

const assembleTransaction = (data: any): Transaction => {
  return {
    txid: data.txid,
    fee: data.fee,
    vin: data.vin,
    vout: data.vout,
  };
};

export const App = () => {
  const [txId, setTxId] = useState('');
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  const getTxIdInfo = async () => {
    try {
      const url = 'https://mempool.space/api/tx/';
      const response = await axios.get(url + txId);
      const transaction: Transaction = assembleTransaction(response.data);
      setTransactions([...transactions, transaction]);
    } catch (error) {
      console.log(error);
    }
  }

  const renderTransactions = transactions.map(tx => {
    return <TransactionCard key={tx.txid} tx={tx} />;
  });

  return (
    <div className="ui container" style={{ marginTop: '5' }}>
      <SearchBar value={txId} onChange={setTxId} onSearch={getTxIdInfo} />
      {renderTransactions}
    </div>
  );
};
