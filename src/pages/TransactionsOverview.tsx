import { useEffect, useState } from 'react';

import { getTxInfo } from 'api/getTxInfo';
import { TxInfo } from 'types';
import { Input } from 'components/Input';
import { TransactionInfo } from 'components/TransactionInfo';

const TIMEOUT = 1000;

export const TransactionsOverview = (): JSX.Element => {
  const [txId, setTxId] = useState('');
  const [txData, setTxData] = useState<TxInfo>();

  const fetchTx = async () => setTxData(await getTxInfo(txId));

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (txId)
      timeoutId = setTimeout(
        fetchTx,
        TIMEOUT,
      );

    return () => timeoutId && clearTimeout(timeoutId);
  }, [txId]);

  return (
    <div className="ui container">
      <div className="ui segment">
        <h1 className="ui center aligned segment">Bitcoin Transactions Overview</h1>
        <div>
          <Input
            id="Bitcoin address"
            placeholder="15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521"
            value={txId}
            onChange={setTxId}
          />
          {txData && <TransactionInfo txData={txData} />}
        </div>
      </div>
    </div>
  );
};
