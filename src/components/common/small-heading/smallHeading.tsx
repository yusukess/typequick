import styles from './smallHeading.module.scss';
import { ElementType } from 'react';

const smallHeading = (Props: any) => {
  let HeadingTag = `h${Props.level}` as ElementType;
  return (
    <HeadingTag className={styles.wrapper} data-type={Props.type}>
      {Props.text}
    </HeadingTag>
  );
};

export default smallHeading;
