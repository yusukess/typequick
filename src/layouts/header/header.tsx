'use client';

import styles from './header.module.scss';
import React, { useState } from 'react';
import GlobalNavigation from '@components//common/global-navigation/globalNavigation';
import GlobalMenu from '@components/common/global-menu/globalMenu';
import MenuButton from '@components//common/menu-button/menuButton';
import IconButton from '@components//common/icon-button/iconButton';
import InstagramIcon from '@icons/instagram.svg';
import CartIcon from '@icons/cart.svg';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const navFunction = () => {
    setOpenNav(!openNav);
  };
  return (
    <header className={styles.wrapper}>
      <GlobalNavigation />
      <IconButton href="https://store.shopping.yahoo.co.jp/dponline/" icon={<CartIcon />} />
      <IconButton href="https://www.instagram.com/typequick_japan" icon={<InstagramIcon />} />
      <MenuButton state={openNav} onClick={() => navFunction()} />
      <GlobalMenu state={openNav} onClick={() => navFunction()} />
    </header>
  );
};

export default Header;
