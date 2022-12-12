import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

export default function Button({ text, form, disabled, onClick, modifier, al }) {
  return (
    <button
      type={form ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      className={`button ${modifier}`}
      aria-label={al}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  form: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  modifier: PropTypes.string,
  al: PropTypes.string,
};

Button.defaultProps = {
  form: false,
  disabled: false,
  modifier: '',
  al: '',
};
