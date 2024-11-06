import styles from './thumbnail.module.scss';
import Image from 'next/image';

const Thumbnail = (Props: any) => {
  return (
    <div className={styles.wrapper}>
      {Props.thumbnail}
      <p className={styles.text} data-text-size={Props.textSize}>
        {Props.text}
      </p>
    </div>
  );
};

export default Thumbnail;
