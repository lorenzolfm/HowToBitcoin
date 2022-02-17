import './TransactionDetail.css'
import { Input } from '../../types';

type Props = {
  input: Input,
  onTxIdClicked: Function,
};

export const InputDetail = ({ input, onTxIdClicked }: Props) => {
  return (
    <div className="detail-container input">
      <p
        onClick={() => onTxIdClicked(input.txid)}
        style={{ cursor: 'pointer', color: 'dodgerblue' }}
      >
        {input.txid}:{input.vout}
      </p>
    </div>
  );
};
