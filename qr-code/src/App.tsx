import { useState } from 'react';

export const App = () => {
  const [ammount, setAmmount] = useState(0);
  const [address, setAddress] = useState('');

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        placeholder="ammount"
        type="text"
        value={ammount === 0 ? '' : ammount}
        onChange={(e) => setAmmount(parseFloat(e.target.value))}
      />
      <input
        placeholder="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  );
};
