import { Transaction } from './App';

type TransactionCardProps = {
  tx: Transaction,
}

export const TransactionCard = ({ tx }: TransactionCardProps) => {
  return (
    <div className="ui card" style={{ width: '100%' }}>
      <div className="content">

        <div className="header">
          Transaction ID: {tx.txid}
        </div>

        <div className="description" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <p style={{ textAlign: 'center' }}>INPUTS From</p>
            <p>1e5bc796465e057d6ac5ff258639ac5fc3999493b70456f2602d62c23479ba8a:0</p>
            <p>1 BTC</p>
          </div>

          <div>
            <p style={{ textAlign: 'center' }}>OUTPUTS To</p>
            <p>1e5bc796465e057d6ac5ff258639ac5fc3999493b70456f2602d62c23479ba8a:0</p>
            <p>0.9 BTC</p>
            <p>Fee: {tx.fee / (10**8)} BTC</p>
          </div>

        </div>
      </div>
    </div>
  );
}
