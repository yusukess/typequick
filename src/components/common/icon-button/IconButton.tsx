import styles from './iconButton.module.scss';
import Link from 'next/link';

const IconButton = (Props: any) => {
  return (
    <div className={styles.wrapper}>
      <Link href={Props.href} rel="noopener noreferrer" target="_blank">
        {Props.icon}
      </Link>
    </div>
  );
};

export default IconButton;
