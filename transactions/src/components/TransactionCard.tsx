import { Transaction, Input, Output } from '../types';
import { toBitcoin } from '../utils';

type InputDetailProps = { input: Input }
const InputDetail = ({ input }: InputDetailProps) => {
  return <p>{input.txid}:{input.vout}</p>;
}

type OutputDetailProps = { output: Output }
const OutputDetail = ({ output }: OutputDetailProps) => {
  return (
    <>
      <p>{output.scriptpubkey_address}</p>
      <p>Ammount: {toBitcoin(output.value)} BTC</p>
    </>
  );
}

const getTotalInputAmmount = (vin: Array<Input>): number => {
  let totalAmmount = 0;
  vin.forEach(input => totalAmmount += input.prevout.value);
  return toBitcoin(totalAmmount);
};

const getTotalOutputAmmount = (vout: Array<Output>): number => {
  let totalAmmount = 0;
  vout.forEach(output => totalAmmount += output.value);
  return toBitcoin(totalAmmount);
};

type TransactionCardProps = {
  tx: Transaction,
};
export const TransactionCard = ({ tx }: TransactionCardProps) => {
  const { txid, fee, vin, vout } = tx;

  const renderInputDetails = vin.map(input => {
    return <InputDetail input={input} />;
  });

  const renderOutputDetails = vout.map(output => {
    return <OutputDetail output={output} />;
  });

  return (
    <div className="ui card" style={{ width: '100%' }}>
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
    </div>
  );
}
