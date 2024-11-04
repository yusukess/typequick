import styles from './product.module.scss';
import Heading from '@components/common/section-heading/sectionHeading';

const Prtoducts = (props: any) => {
  return (
    <section className={styles.wrapper} id="productr">
      <div className={styles.inner}>
        <Heading en="Product" ja="製品" />
      </div>
    </section>
  );
};

export default Prtoducts;
