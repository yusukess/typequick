import styles from './thumbnail.module.scss';

const Thumbnail = (Props: any) => {
  return (
    <div className={styles.wrapper}>
      {Props.thumbnail}
      <p className={styles.text}>{Props.text}</p>
    </div>
  );
};

export default Thumbnail;
