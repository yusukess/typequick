import styles from './mv.module.scss';
import Logo from './img/logo.svg';

const Mv = () => {
  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h1 className={styles.heading}>
          世界数か国で、
          <br />
          40年以上。
          <br />
          タイピング練習ソフトの
          <br />
          ベストセラー。
        </h1>
        <Logo />
      </div>
    </section>
  );
};

export default Mv;
