import styles from './needs.module.scss';
import Image from 'next/image';
import Heading from '@components/common/section-heading/sectionHeading';
import SmallHeading from '@components/common/small-heading/smallHeading';
import HeadContent from '@components/needs/head-content/headContent';
import Image01 from './images/image01.jpg';
import Image02 from './images/image02.jpg';
import Image03 from './images/image03.jpg';
import Image04 from './images/image04.jpg';

const Needs = (props: any) => {
  return (
    <section className={styles.wrapper} id="needs">
      <div className={styles.inner}>
        <Heading en="Needs" ja="タイピングの必要性" />
        <SmallHeading text={'タイピングは、\n夢を叶える力になる。'} level={3} type={1} />
        <p className={styles.body}>
          文字を書くようにタイピングをする時代において、どれだけの人が正しいタイピングを身につけられているでしょうか。
          <br />
          タイピングなんて、自己流で大丈夫。確かにそれでも、文字は打てます。 <br />
          しかし、数学の公式やスポーツのフォームのように、正しく身につけることで業務効率やパフォーマンスを飛躍的に向上させます。{' '}
          <br />
          これから社会で活躍するにはパソコンはマストアイテム。 <br />
          そして、正しいタイピングは、様々な仕事であなたを助けてくれます。 <br />
          あなたの夢を叶えるために大きな力になる、重要なスキルなのです。
        </p>
        <div className={styles.content}>
          <div className={styles.headContentWrapper}>
            <HeadContent
              className={styles.headContent}
              headingText={'夢は看護師'}
              headingLevel={4}
              headingType={6}
              text={
                '電子カルテの入力や書類作成。\nタッチタイピングを身につけていれば、業務効率が上がり、患者さんと向き合う時間が増えます。'
              }
              thumbnail={<Image src={Image01} alt="イメージ画像" width={482} height={300} />}
            />
            <HeadContent
              className={styles.headContent}
              headingText={'夢は弁護士'}
              headingLevel={4}
              headingType={6}
              text={
                '膨大な資料の作成など、タッチタイピングを身につけることで、スムーズにおこなうことができ、思考に多くの時間を使うことができます。'
              }
              thumbnail={<Image src={Image02} alt="イメージ画像" width={482} height={300} />}
            />
            <HeadContent
              headingText={'夢はクリエイター'}
              headingLevel={4}
              headingType={6}
              text={
                'プログラミングやデザインも、タッチタイピングができればラフスケッチをする様に、スムーズに思考をアウトプットすることが可能になります。'
              }
              thumbnail={<Image src={Image03} alt="イメージ画像" width={482} height={300} />}
            />
            <HeadContent
              headingText={'夢はジャーナリスト'}
              headingLevel={4}
              headingType={6}
              text={
                'ジャーナリストにとってスピーディーなタイピングは、欠かせないスキル。情報を1秒でも早く世の中に発信することができます。'
              }
              thumbnail={<Image src={Image04} alt="イメージ画像" width={482} height={300} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Needs;
