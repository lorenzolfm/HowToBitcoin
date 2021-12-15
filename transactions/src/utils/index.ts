import axios from 'axios';
import { Transaction, Input, Output } from '../types';

export const toBitcoin = (satoshis: number): number => {
  return satoshis / (10 ** 8);
};

export const getTotalInputAmmount = (vin: Array<Input>): number => {
  let totalAmmount = 0;
  vin.forEach(input => totalAmmount += input.prevout.value);
  return toBitcoin(totalAmmount);
};

export const getTotalOutputAmmount = (vout: Array<Output>): number => {
  let totalAmmount = 0;
  vout.forEach(output => totalAmmount += output.value);
  return toBitcoin(totalAmmount);
};

const assembleTransaction = (data: any): Transaction => {
  return {
    txid: data.txid,
    fee: data.fee,
    vin: data.vin,
    vout: data.vout,
  };
};

export const getTxIdInfo = async (txId: string, transactions: Transaction[], callback: Function) => {
  try {
    const url = 'https://mempool.space/api/tx/';
    const response = await axios.get(url + txId);
    const transaction: Transaction = assembleTransaction(response.data);
    callback([...transactions, transaction]);
  } catch (error) {
    console.log(error);
  }
};

export const getAddrTxCount = async (addr: string) => {
  try {
    const url = `https://mempool.space/api/address/${addr}/txs`;
    const response = await axios.get(url);
    return response.data.length;

  } catch (error) {
    console.log(error);
  }
}
