import { useState } from 'react';

export default function useInput (inputValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    console.log(name);
    setValues(value);
  };
  return { values, setValues, handleChange };
}
