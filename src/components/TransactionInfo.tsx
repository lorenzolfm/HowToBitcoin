import { TxInfo } from 'types';
import { Dropdown } from './Dropdown';

type Props = { txData: TxInfo; };

const toBtc = (satoshis: number) => satoshis / (10 ** 8);

export const TransactionInfo = ({ txData }: Props): JSX.Element => {
  const totalInputAmount = txData.vin.reduce(
    (acc, curr) => acc += curr.prevout.value,
    0,
  );

  const totalOutputAmount = totalInputAmount - txData.fee;

  return (
    <div className="ui segment">
      <p>{txData.txId}</p>
      <h2>Transaction details</h2>
      <div className="ui segment grid">
        <Dropdown items={txData.vin.map(vin => `${vin.prevout.scriptpubkey_address} (${vin.prevout.scriptpubkey_type})`)}>
          Used {txData.vin.length} unspent transaction outputs (UTXOs) as input.
        </Dropdown>
        <Dropdown items={txData.vout.map(vout => `${vout.scriptpubkey_address} (${vout.scriptpubkey_type})`)}>
          Send to {txData.vout.length} different outputs.
        </Dropdown>
      </div>
      <div className="ui segment">
        {
          txData.status.confirmed
            ? <p>This transaction was confirmed on block {txData.status.block_height}.</p>
            : <p>This transaction is yet to be confirmed.</p>
        }
        <p>Fee: {txData.fee} satoshis ({toBtc(txData.fee)} BTC).</p>
        <p>Input amount: {totalInputAmount} satoshis ({toBtc(totalInputAmount)} BTC).</p>
        <p>Output amount: {totalOutputAmount} satoshis ({toBtc(totalOutputAmount)} BTC).</p>
      </div>
    </div >
  );
};
