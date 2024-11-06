import styles from './headContent.module.scss';
import SmallHeading from '@components/common/small-heading/smallHeading';

const headContent = (Props: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <SmallHeading text={Props.headingText} level={Props.headingLevel} type={Props.headingType || 3} />
        {Props.headingSubText && (
          <SmallHeading text={Props.headingSubText} level={Props.headingLevel} type={Props.headingSubType || 4} />
        )}
      </div>
      {Props.text && <p className={styles.text}>{Props.text}</p>}
      {Props.thumbnail}
    </div>
  );
};

export default headContent;
