import styles from './thumbnail.module.scss';
import Image from 'next/image';

const Thumbnail = (Props: any) => {
  return (
    <div className={styles.wrapper}>
      {Props.thumbnail}
      <p className={styles.caption}>{Props.caption}</p>
    </div>
  );
};

export default Thumbnail;
