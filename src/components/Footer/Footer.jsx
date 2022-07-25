import React from 'react'
import css from './styles.module.css';
import { InstagramOutlined, GoogleOutlined, LinkedinOutlined, GithubOutlined, FacebookOutlined } from '@ant-design/icons'

export const Footer = () => {
  return (
    <div className={css.wrapper}>
      <a href='https://www.linkedin.com/in/kirill-bukin-439572228/'>
        <LinkedinOutlined className={css.linkedin} />
      </a>
      <a href='https://www.instagram.com/'>
        <InstagramOutlined className={css.instagram} />
      </a>
      <a href='https://www.google.com/'>
        <GoogleOutlined className={css.google} />
      </a>
      <a href='https://www.github.com/'>
        <GithubOutlined className={css.github} />
      </a> <a href='https://www.facebook.com/'>
        <FacebookOutlined className={css.facebook} />
      </a>
    </div>
  )
}
