import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">Home</Link>
      <Link to="/qrcode" className="item">Qr Codes</Link>
      <Link to="/transactions" className="item">Transactions Overview</Link>
      <Link to="/sha256" className="item">Hash Function Playground</Link>
      <Link to="/mining" className="item">Mining Overview</Link>
    </div>
  );
};
