import PropTypes from 'prop-types';
import React from 'react';
import '../styles.css';

export default function Input({ id, value, label, onChange }) {
  return (
    <label htmlFor={id} className="form__label">
      {label}
      <input
        id={id}
        type="text"
        name={id}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="form__input"
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '' || 0,
};
