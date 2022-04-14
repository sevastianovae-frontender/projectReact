import React from 'react';
import s from './index.module.css';

function FormButton({ children, color, ...props }) {
  return (
    <button {...props} className={`${s.btn} ${s[color]}`}>
      {children}
    </button>
  );
}

export default FormButton;
