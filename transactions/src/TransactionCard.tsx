export const TransactionCard = () => {
  return (
    <div className="ui card" style={{ width: '100%' }}>
      <div className="content">
        <div className="header" style={{ fontSize: 14 }}>
          Transaction 1e5bc796465e057d6ac5ff258639ac5fc3999493b70456f2602d62c23479ba8a
        </div>
        <div className="description">
          INPUTS From
          <br />
          1e5bc796465e057d6ac5ff258639ac5fc3999493b70456f2602d62c23479ba8a:0
          <br />
          0.1 BTC
        </div>
        <div className="description">
          OUTPUTS To
          <br />
          1e5bc796465e057d6ac5ff258639ac5fc3999493b70456f2602d62c23479ba8a:0
          <br />
          0.1 BTC
        </div>
      </div>
    </div>
  );
};
