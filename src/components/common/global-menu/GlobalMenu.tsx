import styles from './globalMenu.module.scss';
import Link from 'next/link';
import LinkIcon from 'src/icon/link.svg';

const GlobalMenu = (Props: any) => {
  return (
    <nav className={`${styles.wrapper} ${Props.state ? 'is-open' : ''}`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">Home</Link>
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
            Official Site<LinkIcon></LinkIcon>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default GlobalMenu;
