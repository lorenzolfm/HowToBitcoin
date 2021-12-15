type Props = {
  txCount: number | null,
  address: string | null,
};
export const AddrTxCard = ({ txCount, address }: Props) => {
  return(
    <div>
      <p>The address {address}, has {txCount} transactions associated with it</p>
    </div>
  );
};
