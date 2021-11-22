type InputProps = {
  placeholder?: string,
  value: string,
  onChange: Function,
};

export const Input = ({
  placeholder, value, onChange
}: InputProps) => {
  return (
    <div className="ui input">
      <input
        placeholder={placeholder}
        type="text"
        value={value === '' ? '' : value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
