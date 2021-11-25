import { useState } from 'react';

import axios from 'axios';

type input = {
  txid: string,
  value: number,
}

type output = {
  addr: string,
  value: number,
}

interface Transaction {
  txId: string,
  inputs: Array<input>,
  outputs: Array<output>,
  fee: number,
};

export const App = () => {
  const [txId, setTxId] = useState('');
  const [txInfo, setTxInfo] = useState<Partial<Transaction>>({});

  const getTransaction = async () => {
    try {
      const url: string = `https://mempool.space/api/tx/${txId}`
      const response = await axios.get(url);

      const inputs = response.data.vin.map((input: any) => {
        const newInput: input = {
          txid: input.txid,
          value: input.prevout.value,
        };
        return newInput;
      });

      const outputs = response.data.vout.map((output: any) => {
        const newOutput: output = {
          addr: output.scriptpubkey_address,
          value: output.value,
        };
        return newOutput;
      })


      const newTxInfo: Transaction = {
        txId: response.data.txid,
        inputs: inputs,
        outputs: outputs,
        fee: response.data.fee,
      }

      setTxInfo(newTxInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ui container">
      <h1>Transactions</h1>
      <div className="ui input">
        <label htmlFor="transactionId">Enter Transaction ID</label>
        <input id="transactionId" type="text" value={txId} onChange={e => setTxId(e.target.value)} />
        <button onClick={getTransaction}>Search</button>
      </div>
    </div>
  );
};
