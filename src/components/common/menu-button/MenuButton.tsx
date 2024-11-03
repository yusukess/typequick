import styles from './menuButton.module.scss';

const menuButton = (Props: any) => {
  return (
    <div
      className={`${styles.wrapper} ${Props.state ? 'is-open' : ''}`}
      onClick={Props.onClick}
      onKeyDown={Props.onKeyDown}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default menuButton;
