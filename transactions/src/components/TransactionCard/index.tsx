import { Transaction } from '../../types';
import {
  toBitcoin,
  getTotalInputAmmount,
  getTotalOutputAmmount ,
} from '../../utils';

import { InputDetail } from './InputDetail';
import { OutputDetail } from './OutputDetail';

type TransactionCardProps = {
  tx: Transaction,
  onAddressClicked: (addr: string) => void,
  onTxIdClicked: (addr: string) => void,
};

export const TransactionCard = ({ tx, onAddressClicked, onTxIdClicked }: TransactionCardProps) => {
  const { txid, fee, vin, vout } = tx;

  const renderInputDetails = vin.map((input, index) => {
    return <InputDetail key={index.toString()} input={input} onTxIdClicked={onTxIdClicked} />;
  });

  const renderOutputDetails = vout.map((output, index) => {
    return <OutputDetail key={index.toString()} output={output} onAddressClicked={onAddressClicked} />;
  });

  return (
      <div className="content">
        <div className="header">
          Transaction ID: {txid}
          <br />
          Number of inputs: {vin.length}
          <br />
          Number of Outputs: {vout.length}
          <br />
          Transaction Fee: {toBitcoin(fee)} BTC
        </div>
        <div className="description" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <p style={{ textAlign: 'center' }}>INPUTS From</p>
            {renderInputDetails}
            <p style={{ textAlign: 'right' }}>Total: {getTotalInputAmmount(vin)} BTC</p>
            <p>You can search other transactions by clicking in any txid above.</p>
          </div>
          <div>
            <p style={{ textAlign: 'center' }}>OUTPUTS To</p>
            {renderOutputDetails}
            <p style={{ textAlign: 'right' }}>Total: {getTotalOutputAmmount(vout)} BTC</p>
            <p>Click on an address to see how many transactions are associated with that address.</p>
          </div>
        </div>
      </div>
  );
};
