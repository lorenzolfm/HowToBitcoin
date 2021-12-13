interface PrevOut {
  value: number,
};

export interface Input {
  txid: string,
  is_coinbase: boolean,
  vout: number,
  prevout: PrevOut,
};

export interface Output {
  scriptpubkey_address: string,
  value: number,
};

export interface Transaction {
  txid: string,
  fee: number,
  vin: Array<Input>,
  vout: Array<Output>,
};
