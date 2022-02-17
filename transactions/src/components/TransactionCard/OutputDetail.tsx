import './TransactionDetail.css'
import { Output } from '../../types';
import { toBitcoin } from '../../utils';

type Props = {
  output: Output,
  onAddressClicked: Function,
};

export const OutputDetail = ({ output, onAddressClicked }: Props) => {
  return (
    <div className='detail-container'>
      <p
        onClick={() => onAddressClicked(output.scriptpubkey_address)}
        style={{ cursor: 'pointer', color: 'dodgerblue'}}>
        {output.scriptpubkey_address}
      </p>
      <p>{toBitcoin(output.value)} BTC</p>
    </div>
  );
};
