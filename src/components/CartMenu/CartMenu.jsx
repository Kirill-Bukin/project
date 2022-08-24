import React from "react";
import { CartItem } from "../CartItem";
import css from './styles.module.css';


export const CartMenu = ({ items, onClick }) => {
  return (
    <div className={css.menu}>
      <div className={css.list}>
        {items.length > 0
          ? items.map((item) => (
              <CartItem
                key={item.id}
                price={item.price}
                title={item.label}
                id={item.id}
              />
            ))
          : "Корзина пустая"}
      </div>
      {items.length > 0 ? (
        <div className={css.arrange}>
          <button onClick={onClick}>
            Оформить заказ
          </button>
        </div>
      ) : null}
    </div>
  );
};

