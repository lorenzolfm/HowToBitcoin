import { useState, useEffect } from 'react';
import { QrCode } from './QrCode';
import { Input } from './Input';

export const App = () => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [data, setData] = useState('');
  const [displayErrorMsg, setDisplayErrorMsg] = useState(false);
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    if (data !== '')
      setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${data}`)
  }, [data]);

  const handleClick = () => {
    if (amount !== '' && address !== '') {
      if (displayErrorMsg) setDisplayErrorMsg(false);

      const str = `bitcoin:${address}?amount=${amount}`;
      setData(str);
    } else {
      setDisplayErrorMsg(true);
    }
  }

  return (
    <div className="ui container">
      <div>
        <div className="ui segment" style={{ marginTop: 20 }}>
          <h1 style={{ textAlign: 'center' }}>
            QR Code Generator
          </h1>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            { displayErrorMsg &&
              <p>You should enter an amount and an address!</p>
            }
            <Input
              placeholder="Amount"
              value={amount}
              onChange={setAmount}
            />
            <Input
              placeholder="Address"
              value={address}
              onChange={setAddress}
            />
            <button className="ui primary basic button" onClick={handleClick}>
              Generate
            </button>
          </div>
          <QrCode url={qrCode} />
        </div>
      </div>
    </div>
  );
};
