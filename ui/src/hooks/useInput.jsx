import React from 'react';
import Input from '../components/Form/Input';

const useInput = ({ id, value, label, onChange }) => (
  <Input
    key={`${id}-input`}
    id={id}
    value={value}
    label={label}
    onChange={onChange}
  />
);

export default useInput;
