import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductPage } from "../../store/productPage/slice";
import { productPageSelectors } from "../../store/productPage";
import { Divider } from "antd";
import { Loader } from "../../components/common/Loader";
import css from "./styles.module.css";

export const ProductPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const productPage = useSelector(productPageSelectors.getProductPage);
  const isLoaded = useSelector(productPageSelectors.getIsLoadedSeletor);
  const isLoading = useSelector(productPageSelectors.getIsLoadingSeletor);
  const isError = useSelector(productPageSelectors.getIsErrorSeletor);
  

  useEffect(() => {
    dispatch(fetchProductPage(id));
  }, [id]);

  
  return (
    <div className={css.conteiner}>
      {isLoading && <Loader />}
      {isLoaded &&
        productPage.map(({ id, label, price, img, description }) => (
          <div key={id} className={css.wrap}>
            <div className={css.image}>
              <img className={css.img} src={img} alt="картинка"></img>
            </div>
            <div className={css.info}>
              <h1>{label}</h1>
              <Divider />
              <span>{description}</span>
              <Divider />
              <div className={css.price}>
                <span className={css.price_price}>{`${price} $`}</span>
                <button className={css.btn}>Добавить в корзину</button>
              </div>
            </div>
          </div>
        ))}
      {isError && "ошибка"}
    </div>
  );
};
