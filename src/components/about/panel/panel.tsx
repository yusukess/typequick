import styles from './panel.module.scss';

const panel = (Props: any) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.num}>{Props.num}</span>
      <p className={styles.lead}>{Props.lead}</p>
      <p className={styles.body}>{Props.body}</p>
    </div>
  );
};

export default panel;
