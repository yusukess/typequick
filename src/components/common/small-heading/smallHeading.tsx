import styles from './smallHeading.module.scss';

const smallHeading = (Props: any) => {
  return (
    <div className={styles.wrapper} aria-level={Props.level} data-type={Props.type}>
      {Props.text}
    </div>
  );
};

export default smallHeading;
