import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons'
import { ItemInCart } from '../ItemInCart/ItemInCart'
import { CartMenu } from '../CartMenu/CartMenu';
import css from './styles.module.css';
import { cartSelectors } from '../../store/cart';


export const CartBlock = () => {
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const items = useSelector(cartSelectors.getCartSelector);
  const navigate = useNavigate();


  const handleClick = useCallback(() => {
    setisMenuVisible(false);
    navigate('/cart');
  }, [navigate]);


  return (
    <div className={css.cart}>
      <ItemInCart quantity={items}/>
        <DeleteOutlined 
          className={css.icon}
          onClick={() => setisMenuVisible(!isMenuVisible)}
        />
        {isMenuVisible && <CartMenu items={items} onClick={handleClick} />}</div>
  );
};
