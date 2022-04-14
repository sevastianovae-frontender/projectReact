import React from "react";
import s from "./styles.module.css";
import notFound from './img/ic-notfound.svg';

export const NotFound = ({ children, title, buttonText, buttonAction }) => {
  return (
    <div className={s.notFound}>
      <img src={notFound} className={s.image} alt="" aria-hidden="true" />
      <h2 className={s.title}>{title}</h2>
      {children}
      <button className={s.btn} onClick={buttonAction}>{buttonText}</button>
    </div>
  );
};
