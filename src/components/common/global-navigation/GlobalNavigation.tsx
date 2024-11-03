import styles from './globalNavigation.module.scss';
import Link from 'next/link';
import HomeIcon from '@icons/home.svg';
import LinkIcon from '@icons/link.svg';

const GlobalNavigation = (Props: any) => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <HomeIcon />
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/">About</Link>
        </li>
        <li className={styles.item}>
          <Link href="/">Function</Link>
        </li>
        <li className={styles.item}>
          <Link href="/">Product</Link>
        </li>
        <li className={styles.item}>
          <Link href="/">Needs</Link>
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
