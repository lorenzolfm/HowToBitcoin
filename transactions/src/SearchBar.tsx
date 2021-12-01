export const SearchBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="ui input" style={{ width: '85%' }}>
        <input type="text" placeholder="Enter a transaction ID..." />
      </div>
      <button className="ui primary button">Search</button>
    </div>
  );
};
