import styles from './headContent.module.scss';
import SmallHeading from '@components/common/small-heading/smallHeading';

const headContent = (Props: any) => {
  return (
    <div className={`${styles.wrapper} ${Props.border ? 'border' : ''}`}>
      <div className={styles.heading}>
        <SmallHeading text={Props.headingText} level={Props.headingLevel} type={Props.headingType || 3} />
        {Props.headingSubText && (
          <SmallHeading text={Props.headingSubText} level={Props.headingLevel} type={Props.headingSubType || 4} />
        )}
      </div>
      {Props.bodyText && <p className={styles.text}>{Props.bodyText}</p>}
      {Props.bodySubText && <p className={styles.bodySubText}>{Props.bodySubText}</p>}
      {Props.bodyList && (
        <ul className={styles.bodyList}>
          {Props.bodyList.map((value: any, index: any) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
      {Props.thumbnail}
    </div>
  );
};

export default headContent;
