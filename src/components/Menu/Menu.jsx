import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFetchCategories } from '../../store/categories/slice'
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import { getCategories } from '../../store/categories/selectors';
import css from './styles.module.css';

export const Menu = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);

  useEffect(() => {
      dispatch(getFetchCategories())
  }, [dispatch])
  return (
        <nav className={css.menu}>
            <Link to="/goods"><h2>Все товары</h2></Link>
            <Divider />
            {categories.map(({ label, id }) =>
                <Link key={id} to={`/category/${id}`}>
                    <h4>{label}</h4>
                    <Divider />
                </Link>)}
            
        </nav>
  )
}
