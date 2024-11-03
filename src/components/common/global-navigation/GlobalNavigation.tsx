import styles from './globalNavigation.module.scss';
import Link from 'next/link';
import HomeIcon from '@icons/home.svg';
import LinkIcon from '@icons/link.svg';
import { Link as Scroll } from 'react-scroll';

const GlobalNavigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Scroll to="top" smooth={true} duration={600}>
            <HomeIcon />
          </Scroll>
        </li>
        <li className={styles.item}>
          <Scroll to="about" smooth={true} duration={600}>
            About
          </Scroll>
        </li>
        <li className={styles.item}>
          <Scroll to="function" smooth={true} duration={600}>
            Function
          </Scroll>
        </li>
        <li className={styles.item}>
          <Scroll to="product" smooth={true} duration={600}>
            Product
          </Scroll>
        </li>
        <li className={styles.item}>
          <Scroll to="needs" smooth={true} duration={600}>
            Needs
          </Scroll>
        </li>
        <li className={styles.item}>
          <Link href="https://www.datapacific.co.jp/typequick/" rel="noopener noreferrer" target="_blank">
            Official Site
            <LinkIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default GlobalNavigation;
