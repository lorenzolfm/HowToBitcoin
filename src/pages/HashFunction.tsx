import { useEffect, useState } from 'react';

import { Input } from 'components/Input';
import { sha256 } from 'js-sha256';

export const HashFunction = () => {
  const [input, setInput] = useState<string>('Hash it');
  const [output, setOutput] = useState(sha256(input));

  useEffect(() => {
    if (input) setOutput(sha256(input));
    else setOutput('');
  }, [input]);

  return (
    <div className="ui container">
      <div className="ui segment">
        <h1 className="ui center aligned segment">Hash Function Playground</h1>
        <Input id="Input" value={input} onChange={setInput} />
        <div className="ui segment" style={{ overflowWrap: 'break-word' }}>
          {output}
        </div>
      </div>
    </div>
  );
};
