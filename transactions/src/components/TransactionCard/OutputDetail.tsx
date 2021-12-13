import { Output } from '../../types';
import { toBitcoin } from '../../utils';

type Props = { output: Output }
export const OutputDetail = ({ output }: Props) => {
  return (
    <>
      <p>{output.scriptpubkey_address}</p>
      <p>Ammount: {toBitcoin(output.value)}</p>
    </>
  );
};
