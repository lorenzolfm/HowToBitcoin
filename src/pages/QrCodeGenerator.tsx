import { useEffect, useState } from 'react';
import { Input } from 'components/Input';
import { QrCode } from 'components/QrCode';

const qrCodeApiUrl = 'http://api.qrserver.com/v1/create-qr-code/';
const TIMEOUT = 1000;

const isFloat = (str: string) => isNaN(parseFloat(str));

export const QrCodeGenerator = (): JSX.Element => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (amount && isFloat(amount))
      setError(true);
    else setError(false);

  }, [amount]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (address && amount && !error)
      timeoutId = setTimeout(
        () => setUrl(`${qrCodeApiUrl}?data=bitcoin:${address}?amount=${amount}`),
        TIMEOUT,
      );

    return () => timeoutId && clearTimeout(timeoutId);
  }, [address, amount]);

  return (
    <div className="ui container">
      <div className="ui segment">
        <h1 className="ui center aligned segment">Bitcoin Payment - QR Code Generator</h1>
        <div>
          <Input
            id="Bitcoin address"
            placeholder="1wiz18xYmhRX6xStj2b9t1rwWX4GKUgpv"
            value={address}
            onChange={setAddress}
          />
          <Input
            id="Bitcoin amount"
            placeholder="Amount"
            value={amount}
            onChange={v => setAmount(v)}
          />
          <div className="ui center aligned segment">
            {
              error
                ? <p className="error">Amount must be a number</p>
                : <QrCode url={url} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};
