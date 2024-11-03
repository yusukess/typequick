import styles from './globalMenu.module.scss';
import Link from 'next/link';
import LinkIcon from '@icons/link.svg';
import { Link as Scroll } from 'react-scroll';

const GlobalMenu = (Props: any) => {
  return (
    <nav className={`${styles.wrapper} ${Props.state ? 'is-open' : ''}`} onClick={Props.onClick}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Scroll to="top" smooth={true} duration={600} onClick={Props.onClick}>
            Home
          </Scroll>
        </li>
        <li className={styles.item}>
          <Scroll to="about" smooth={true} duration={600} onClick={Props.onClick}>
            About
          </Scroll>
        </li>
        <li className={styles.item}>
          <Scroll to="function" smooth={true} duration={600} onClick={Props.onClick}>
            Function
          </Scroll>
        </li>
        <li className={styles.item}>
          <Scroll to="product" smooth={true} duration={600} onClick={Props.onClick}>
            Product
          </Scroll>
        </li>
        <li className={styles.item}>
          <Scroll to="needs" smooth={true} duration={600} onClick={Props.onClick}>
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

export default GlobalMenu;
