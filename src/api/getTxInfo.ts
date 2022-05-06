import axios from 'axios';

import { IApiTxInfo, TxInfo } from 'types';

const mempoolUrl = 'https://mempool.space/api';

export const getTxInfo = async (txId: string): Promise<TxInfo | undefined> => {
  try {
    return {
      txId,
      ...(await axios.get<IApiTxInfo>(mempoolUrl + `/tx/${txId}`)).data,
    };
  }
  catch (e) {
    console.log(e);
  }
};
