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
      {Props.text && <p className={styles.text}>{Props.text}</p>}
      {Props.subText && <p className={styles.subText}>{Props.subText}</p>}
      {Props.textList && (
        <ul className={styles.textList}>
          {Props.textList.map((value: any, index: any) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
      {Props.thumbnail}
      {Props.price && <p className={styles.price}>{Props.price}</p>}
    </div>
  );
};

export default headContent;
