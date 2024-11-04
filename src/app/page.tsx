import styles from './page.module.scss';
import Mv from '@sections/mv/mv';
import Header from '@layouts/header/header';
import About from '@sections/about/about';
import Function from '@sections/function/function';
import Needs from '@sections/needs/needs';
import Product from '@sections/product/product';

export default function Home() {
  return (
    <main className={styles.main} id="top">
      <Mv />
      <Header />
      <div className={styles.inner}>
        <About />
        <Function />
        <Product />
        <Needs />
      </div>
    </main>
  );
}
