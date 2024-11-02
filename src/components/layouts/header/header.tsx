'use client';

import styles from './header.module.scss';
import React, { useState } from 'react';
import GlobalNavigation from '@components/global-navigation/GlobalNavigation';
import GlobalMenu from '@components/global-menu/GlobalMenu';
import MenuButton from '@components/menu-button/MenuButton';
import IconButton from '@components/icon-button/IconButton';
import InstagramIcon from 'src/icon/instagram.svg';
import CartIcon from 'src/icon/cart.svg';

const url = 'https://live.nicovideo.jp/';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const navFunction = () => {
    setOpenNav(!openNav);
  };
  return (
    <header className={styles.wrapper}>
      <GlobalNavigation></GlobalNavigation>
      <IconButton href="https://store.shopping.yahoo.co.jp/dponline/" icon={<CartIcon></CartIcon>}></IconButton>
      <IconButton href="https://www.instagram.com/typequick_japan" icon={<InstagramIcon></InstagramIcon>}></IconButton>
      <MenuButton state={openNav} onClick={() => navFunction()}></MenuButton>
      <GlobalMenu state={openNav}></GlobalMenu>
    </header>
  );
};

export default Header;
