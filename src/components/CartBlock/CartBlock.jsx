import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import css from './styles.module.css';

export const CartBlock = () => {
  return (
    <div className={css.cart}>
        <DeleteOutlined className={css.icon}/>
        <span className={css.prise}>200$</span>
    </div>
  )
}
