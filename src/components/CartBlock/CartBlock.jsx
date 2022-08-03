import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons'
import { ItemInCart } from '../ItemInCart/ItemInCart'
import { CartMenu } from '../CartMenu/CartMenu';
import css from './styles.module.css';



export const CartBlock = () => {
  const [isCartMenu, setIsCartMenu] = useState(false);
  const items = useSelector((state) => state.cart.ItemsInCart);
  const navigate = useNavigate();


  const handleClick = useCallback(() => {
    setIsCartMenu(false);
    navigate('/cart');
  }, [navigate]);


  return (
    <div className={css.cart}>
      <ItemInCart quantity={items.length}/>
        <DeleteOutlined 
          className={css.icon}
          onClick={() => setIsCartMenu(!isCartMenu)}
        />
        {isCartMenu && <CartMenu items={items} onClick={handleClick} />}</div>
  );
};
