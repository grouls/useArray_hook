import { FC, useState } from 'react';

import './style.css';

const useArray = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  const push = (element: string) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  const clear = () => setValue(initialValue);

  const print = () => value.toString();

  return { push, print, clear };
};

export const App: FC = () => {
  const [inputValue, setInputValue] = useState('');

  const tasks = useArray();

  const handleChange = (value: string) => setInputValue(value);

  const handleSubmit = () => {
    tasks.push(inputValue);
    setInputValue('');
  };
  return (
    <div>
      <div>{tasks.print()}</div>
      <input
        type="input"
        onChange={(e) => handleChange(e.target.value)}
        value={inputValue}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
      <button type="button" onClick={() => tasks.clear()}>
        Clear
      </button>
    </div>
  );
};
