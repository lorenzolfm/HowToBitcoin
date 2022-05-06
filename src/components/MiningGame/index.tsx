import { useEffect, useRef, useState } from 'react';
import { HEIGHT, WIDTH } from './constants';
import { Controller } from './Controller';

let controller: Controller | null = null;

export const MiningGame = () => {
  const [targetSize, setTargetSize] = useState(HEIGHT / 3);
  const [numOfBullets, setNumOfBullets] = useState(1);
  const [attempts, setAttempts] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);

  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    controller = new Controller(
      numOfBullets,
      targetSize,
      setAttempts,
      setIsGameRunning,
    );

    if (ref.current)
      controller.init(ref.current);
  }, []);

  const onTargetSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value);

    setTargetSize(newSize);
    controller?.setTargetSize(newSize);
  };

  const onNumOfBulletsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNumOfBullets = parseInt(event.target.value);

    setNumOfBullets(newNumOfBullets);
    controller?.setNumOfBullets(newNumOfBullets);
  };

  return (
    <div className="ui segment">
      <div className="ui two column grid">
        <div className="row">
          <div className="ui labeled input column">
            <div className="ui label">Bullets</div>
            <input
              disabled={isGameRunning}
              id="number-of-bullets"
              type="number"
              min="1"
              max="10"
              step={1}
              value={numOfBullets}
              onChange={onNumOfBulletsChange}
            />
          </div>
          <div className="column">Attempts: {attempts}</div>
        </div>
        <div className="row">
          <div className="ui labeled input column">
            <div className="ui label">Target Size</div>
            <input
              disabled={isGameRunning}
              id="target-size"
              type="number"
              min="10"
              max={HEIGHT * 0.5}
              step={10}
              value={targetSize}
              onChange={onTargetSizeChange}
            />
          </div>
          <div className="ui labeled input column">
            <button disabled={isGameRunning} onClick={() => controller?.run()} className="ui primary button column">Go!</button>
          </div>
        </div>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <canvas
          ref={ref}
          id="canvas"
          width={WIDTH}
          height={HEIGHT}
        />
      </div>
    </div>
  );
};
