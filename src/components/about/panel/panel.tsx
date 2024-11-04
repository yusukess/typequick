import styles from './panel.module.scss';

const Panel = (Props: any) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.num}>{Props.num}</span>
      <p className={styles.lead}>{Props.lead}</p>
      <p className={styles.body}>{Props.body}</p>
    </div>
  );
};

export default Panel;
