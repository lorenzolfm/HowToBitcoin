import { useState } from 'react';

type Props = {
  children?: (number | string)[];
  items: string[];
}

export const Dropdown = ({ children, items }: Props): JSX.Element => {
  const [open, setOpen] = useState(false);

  const renderedItems = items.map(item => {
    return (
      <div key={item} className="item">{item}</div>
    );
  });

  return (
    <div
      className={`ui dropdown ${open ? 'active visible' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <div className="text">{children}</div>
      <i className="dropdown icon"></i>
      <div
        className={`menu transition ${open ? 'visible' : 'hidden'}`}
      >
        {renderedItems}
      </div>
    </div>
  );
};
