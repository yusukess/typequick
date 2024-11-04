import styles from './needs.module.scss';
import Heading from '@components/common/section-heading/sectionHeading';

const Needs = (props: any) => {
  return (
    <section className={styles.wrapper} id="needs">
      <div className={styles.inner}>
        <Heading en="Needs" ja="タイピングの必要性" />
      </div>
    </section>
  );
};

export default Needs;
