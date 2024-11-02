import styles from './needs.module.scss';

const Item = (props: any) => {
  return (
    <li className={styles.list}>
      <div className={styles.item}>
        <span className={styles.q}>Q.</span>
        <span className={styles.text}>{props.list.question}</span>
      </div>
      <div className={styles.answer}>{props.list.answer}</div>
    </li>
  );
};

export default Item;
