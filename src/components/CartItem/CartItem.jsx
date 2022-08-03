import React from "react";
import css from './styles.module.css';


export const CartItem = ({ title, price, id }) => {
  return (
    <div className={css.item}>
      <span className={css.title}>{ title }</span>
      
      <div className={css.price}>
        <span>{ price } $</span>
      </div>
    </div>
  );
};
