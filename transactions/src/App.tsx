import { useState } from 'react';
import axios from 'axios';

import { SearchBar } from './SearchBar';
import { TransactionCard } from './TransactionCard';

/* Transaction Chain Visualizer
 *
 * User enters a txId
 * Systems gets the transactions and displays it
 * Then searches for transactions inputs who have spent the previous output
 *
*/

//interface Input {
  //addr: string,
  //value: number,
  //is_coinbase: boolean,
  //index: number,
//};

//interface Output {
  //addr: string,
  //value: number,
  //index: number,
//};

export interface Transaction {
  txid: string,
  fee: number,
  //vin: Array<Input>,
  //vout: Array<Output>,
};

const assembleTransaction = (data: any): Transaction => {
  return {
    txid: data.txid,
    fee: data.fee,
  }
};

export const App = () => {
  const [txId, setTxId] = useState('');
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);
  const url = 'https://mempool.space/api/tx/';

  const getTxIdInfo = async () => {
    try {
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
