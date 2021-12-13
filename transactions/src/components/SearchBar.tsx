type SearchBarProps = {
  value: string,
  onChange: Function,
  onSearch: Function,
};

export const SearchBar = ({ value, onChange, onSearch }: SearchBarProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="ui input" style={{ width: '85%' }}>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text" placeholder="Enter a transaction ID..."
        />
      </div>
      <button onClick={() => onSearch()} className="ui primary button">Search</button>
    </div>
  );
};
