import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "./Header";
import { Footer } from "../components/Footer"
import { MainPage } from "../pages/MainPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { CategoryPage } from "../pages/CategoryPage/CategoryPage";
import { GoodsPage } from "../pages/GoodsPage/GoodsPage";
import { store } from '../store';
import css from './styles.module.css';


export function App() {
  const isAuth = true;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={css.app}>
          <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              {!isAuth && <Route path='goods' element={<GoodsPage />} />}
              <Route path='category/:id' element={<CategoryPage />} />
              <Route path='goods/:id' element={<ProductPage />} />
            </Routes>
            <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
