import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchCategoryPage } from '../../store/categoryPage/slice';
import { categoryPageSelectors } from '../../store/categoryPage';
import { Loader } from '../../components/common/Loader';
import { Row } from 'antd';
import css from './styles.module.css';


export const CategoryPage = () => {
    let { id } = useParams()
    const dispatch = useDispatch()
    const categoryPage = useSelector(categoryPageSelectors.getCategoryPage)
    const isLoaded = useSelector(categoryPageSelectors.getIsLoadedSeletor);
    const isLoading = useSelector(categoryPageSelectors.getIsLoadingSeletor);
    const isError = useSelector(categoryPageSelectors.getIsErrorSeletor);

    useEffect(() => {
        dispatch(fetchCategoryPage(id))
    }, [id])

    return (
        <Row justify="center">
            {isLoading && <Loader />}
            {isLoaded &&
                categoryPage.map(({ id, label, price, img }) => (
                    <Link key={id} to={`/goods/${id}`}>
                        <h1 className={css.title}>{label}</h1>
                        <div className={css.image}>
                            <img className={css.img} src={img} alt="картинка"></img>
                        </div>
                        <div>{price}</div>
                    </Link>
                ))}
            {isError && 'Ошибка'}
        </Row>
    )
}