import { MiningGame } from 'components/MiningGame';

export const MiningOverview = (): JSX.Element => {
  return (
    <div className="ui container">
      <div className="ui segment center aligned">
        <h1 className="ui center aligned segment">Difficulty Adjustment</h1>
        <div className="ui segment left aligned">
          <p>
           In order to keep bitcoin issuance in the determined schedule, the Bitcoin network has to adapt to increases and decreases in computing power.
           When the number of computers trying to find a valid proof of work increases, the network must increase the difficulty of the problem.
           The opposite happens when the number of computers decreases.
          </p>
          <p>
            <b>Difficulty adjustments are made by increasing and decreasing the target that needs to be hit in order to find a valid proof of work.</b>
          </p>
          <p>
            You can emulate this behavior using the simulation below. The amount of bullets fired at the same time is analogous to the number of computers in the network trying
            to find a valid proof of work. Try to change the number of bullets and see how this affects the number of attempts that are needed to hit a target.
            You can also change the target size to see how this affects the simulation.
          </p>
        </div>
        <MiningGame />
      </div>
    </div>
  );
};
