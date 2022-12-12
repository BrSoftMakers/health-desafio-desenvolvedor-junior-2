import PropTypes from 'prop-types';
import React from 'react';
import '../Input/styles.css';

export default function Select({ id, value, label, onChange }) {
  const options = [
    { value: '', label: 'Selecione uma espécie de bichinho:' },
    { value: 'cat', label: 'Gato' },
    { value: 'dog', label: 'Cachorro' },
  ];

  return (
    <label htmlFor={id} className="form__label">
      {label}
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="form__input"
      >
        {
          options.map((option) => (
            <option
              key={`${option.value}-option`}
              value={option.value}
            >
              {option.label}
            </option>
          ))
        }
      </select>
    </label>
  );
}

Select.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
