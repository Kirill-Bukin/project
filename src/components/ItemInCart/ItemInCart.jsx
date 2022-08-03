import React from 'react'
import css from "./styles.module.css";


export const ItemInCart = ({quantity = 0}) => {
  return quantity > 0 ? (
    <div className={css.items}>
        { quantity }
    </div>
  ) : null
}
