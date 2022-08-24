import React from "react";
import css from "./styles.module.css";

export const ItemInCart = ({ quantity = 0 }) => {
  if (quantity > 0) {
    return <div className={css.items}>{quantity}</div>;
  }
  return null;
};
