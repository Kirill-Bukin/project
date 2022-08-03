import { UserAddOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { CartBlock } from "../CartBlock";
import { Search } from "../Search/Search";
import css from "./styles.module.css";

export const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.wrapper}>
        <Link to="/" className={css.title}>
          GOOD SHOP
        </Link>
      </div>
      <div className={css.input}>
        <Search />
      </div>
      <div>
        <Link to='/login'><UserAddOutlined /></Link>
      </div>
      <div className={css.button}>
      <CartBlock />
      </div>
    </div>
  );
};
