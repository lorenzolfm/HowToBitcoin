import { SearchBar } from './SearchBar';
import { TransactionCard } from './TransactionCard';

export const App = () => {
  return (
    <div className="ui container">
      <SearchBar />
      <TransactionCard />
    </div>
  );
}
