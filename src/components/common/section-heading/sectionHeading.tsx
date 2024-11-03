import styles from './sectionHeading.module.scss';

const menuButton = (Props: any) => {
  return (
    <h2 className={styles.wrapper}>
      <span className={styles.en}>{Props.en}</span>
      <span className={styles.ja}>{Props.ja}</span>
    </h2>
  );
};

export default menuButton;
