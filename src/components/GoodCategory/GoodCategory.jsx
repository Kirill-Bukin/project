import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPopularCategories, popularCategoriesSelectors } from '../../store/popularCategories';
import { Card } from '../Card';
import { Divider } from 'antd';
import css from './styles.module.css';

export function GoodCategory() {
    const dispatch = useDispatch();
    const category = useSelector(popularCategoriesSelectors.getPopularCategoriesSelector);

    useEffect(() => {
        dispatch(fetchPopularCategories())
    }, [dispatch])

    return (
        <ul className={css.list}>
            {category.map(({ category: { id, label }, items }) =>
                <Link key={id} to={`/category/${id}`}>
                    <Divider><h3>{label}</h3></Divider>
                    <div className={css.wrapper}>
                        {items.map(({ label, id, price, img }) =>
                            <Link key={id} to={`/goods/${id}`}>
                                <Card label={label} id={id} price={price} img={img} />
                            </Link>).slice(0, 1)}
                    </div>
                </Link>)}
        </ul>
    );
}
