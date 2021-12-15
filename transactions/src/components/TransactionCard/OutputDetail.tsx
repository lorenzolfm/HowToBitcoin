import { MouseEvent } from 'react';

import { Output } from '../../types';
import { toBitcoin } from '../../utils';

type Props = {
  output: Output,
  onAddressClicked: (event: MouseEvent<HTMLParagraphElement>) => void 
};
export const OutputDetail = ({ output, onAddressClicked }: Props) => {
  return (
    <>
      <p onClick={onAddressClicked} style={{ cursor: 'pointer', color: 'dodgerblue' }}>{output.scriptpubkey_address}</p>
      <p>Ammount: {toBitcoin(output.value)}</p>
    </>
  );
};
