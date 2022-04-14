import React, { forwardRef } from 'react';
import s from './index.module.css'

const FormInput = forwardRef((props, ref) => {
  return (
    <input ref={ref} className={s.input} {...props} autoComplete="new-password" />
  );
});

export default FormInput;
