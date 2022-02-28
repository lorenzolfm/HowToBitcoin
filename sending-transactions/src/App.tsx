import { sha256 } from 'js-sha256';
import { useState } from 'react';

export const App = (): JSX.Element => {
  const [shaInput, setShaInput] = useState<string>('')

  const hash = () => {
    return sha256(shaInput);
  }

  return (
    <>
      <h3 className="ui center aligned header">Hello from App</h3>
      <div className="ui container">
        <div className="ui segments">
          <div className="ui segment">
            SHA-256
            <input
              type="text"
              value={shaInput}
              onChange={(e) => setShaInput(e.target.value)}
            />
            <p>{shaInput && hash()}</p>
          </div>
        </div>
      </div>
    </>
  );
}
