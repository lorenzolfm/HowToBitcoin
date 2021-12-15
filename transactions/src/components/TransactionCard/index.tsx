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
};
export const TransactionCard = ({ tx, onAddressClicked }: TransactionCardProps) => {
  const { txid, fee, vin, vout } = tx;

  const renderInputDetails = vin.map((input, index) => {
    return <InputDetail key={index.toString()} input={input} />;
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
        <div className="description" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <p style={{ textAlign: 'center' }}>INPUTS From</p>
            {renderInputDetails}
            <p>Total: {getTotalInputAmmount(vin)} BTC</p>
          </div>
          <div>
            <p style={{ textAlign: 'center' }}>OUTPUTS To</p>
            {renderOutputDetails}
            <p>Total: {getTotalOutputAmmount(vout)} BTC</p>
          </div>
        </div>
      </div>
  );
};
