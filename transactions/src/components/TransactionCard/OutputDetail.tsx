import { Output } from '../../types';
import { toBitcoin } from '../../utils';

type Props = {
  output: Output,
  onAddressClicked: Function,
};
export const OutputDetail = ({ output, onAddressClicked }: Props) => {
  return (
    <>
      <p
        onClick={() => onAddressClicked(output.scriptpubkey_address)}
        style={{ cursor: 'pointer', color: 'dodgerblue' }}>
        {output.scriptpubkey_address}
      </p>
      <p>Ammount: {toBitcoin(output.value)}</p>
    </>
  );
};
