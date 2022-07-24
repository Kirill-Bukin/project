import React from 'react';
import { Spin } from 'antd';
import css from './styles.module.css';

export const Loader = () => (
    <div className={css.spin}>
         <Spin />
    </div>
  );