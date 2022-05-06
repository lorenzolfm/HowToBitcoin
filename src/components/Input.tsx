import 'styles/index.css';

type Props = {
  id: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}

export const Input = (
  { id, onChange, placeholder, value }: Props,
): JSX.Element => {
  return (
    <div className="ui labeled input">
      <div className="ui label">{id}</div>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
