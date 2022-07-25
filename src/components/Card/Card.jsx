import React from 'react';
import css from './styles.module.css';

export const Card = ({ img, price, lable}) => {
    return (
      <div className={css.wrapper}>
        <div className={css.item} > 
          <div className={css.title}>{lable}</div>
          <img className={css.img} alt="example" src={img} />
          <span>{price}</span>
        </div>
      </div>
    )
};
