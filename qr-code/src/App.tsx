import { useState, useEffect } from 'react';

export const App = () => {
  const [amount, setAmount] = useState('0');
  const [address, setAddress] = useState('');
  const [data, setData] = useState('');
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${data}`)
  }, [data]);

  const handleClick = () => {
    const str = `bitcoin:${address}?amount=${amount}`;
    setData(str);
  }

  return (
    <div className="app">
      <div>
        <h1>QR Code Generator</h1>
        <input
          placeholder="amount"
          type="text"
          value={amount === '0' ? '' : amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          placeholder="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={handleClick}>Generate</button>
      </div>
      <div>
        <img src={qrCode} alt="" />
      </div>
    </div>
  );
};
