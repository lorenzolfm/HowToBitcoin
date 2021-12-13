import { Input, Output } from '../types';

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
