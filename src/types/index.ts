type Status = { confirmed: boolean, block_height: number, block_hash: string, block_time: number };

interface ITxDescriptor {
  scriptpubkey: string,
  scriptpubkey_address: string,
  scriptpubkey_asm: string,
  scriptpubkey_type: string,
  value: number,
}

interface IVin {
  is_coinbase: boolean,
  prevout: ITxDescriptor,
  scriptsig: string,
  scriptsig_asm: string,
  sequence: number,
  txid: string,
  vout: number,
}

export interface IApiTxInfo {
  fee: number,
  locktime: number,
  size: number,
  status: Status,
  version: number,
  vin: IVin[],
  vout: ITxDescriptor[],
  weight: number,
}

export type TxInfo = IApiTxInfo & { txId: string };
