import { SearchBar } from './SearchBar';
import { TransactionCard } from './TransactionCard';

/* Transaction Chain Visualizer
 *
 * User enters a txId
 * Systems gets the transactions and displays it
 * Then searches for transactions inputs who have spent the previous output
 *
*/
export const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '5' }}>
      <SearchBar />
      <TransactionCard />
    </div>
  );
};
