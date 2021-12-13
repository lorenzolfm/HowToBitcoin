import { Input } from '../../types';

type Props = { input: Input };
export const InputDetail = ({ input }: Props) => {
  return <p>{input.txid}:{input.vout}</p>;
};
