import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "./Header";
import { Footer } from "../components/Footer"
import { MainPage } from "../pages/MainPage";
import { store } from '../store';
import css from './styles.module.css';
import { ProductPage } from "../pages/ProductPage/ProductPage";



export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={css.app}>
          <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path='goods/:id' element={<ProductPage />} />
            </Routes>
            <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
