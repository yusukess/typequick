import styles from './about.module.scss';
import Heading from '@components/common/section-heading/sectionHeading';
import SmallHeading from '@components/common/small-heading/smallHeading';
import Panel from '@components/about/panel/panel';

const About = (props: any) => {
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.inner}>
        <Heading en="About" ja="TypeQuickとは" />
        <SmallHeading text={'タイピングには、\n近道がある。'} level={3} type={1} />
        <p className={styles.body}>
          TypeQuickは、1982年にオーストラリアのTypequick社によって開発されたタイピング練習ソフトのベストセラーです。
          <br />
          1986年には日本語版も発売され、以来30年以上にわたり多くの方々の支持を得て、世界数か国で利用されるロングセラーとなりました。
          <br />
          日本では、主に学校での教育ツールとして導入されており、この10年間だけでも約1,000校の大学、短大、高専、専門学校、高校で150万人以上※1の方がTypeQuickを利用してパソコンの基礎「タッチタイピング」を習得しています。
          <br />
          ※1：弊社出荷実績より［研修キット：1名、1学校サイトライセンス：年3名で計算］
          <br />
          <br />
          TypeQuickは、10のレッスンから構成されるキーボードトレーニングコースです。初心者でも、1日1レッスン1時間の練習を10日間続けるだけで、タッチタイピングを習得することができます。
          <br />
          TypeQuickの利用方法は学校によって様々ですが、TypeQuickのコースを一通り終えれば、タッチタイピングを確実にマスターできるようデザインされています。
        </p>
        <div className={styles.panel}>
          <Panel
            num={'01'}
            lead={'短時間で確実に身に付く'}
            body={
              'TypeQuickは練習者1人1人の練習状況を細かく分析し、既に学んだキー、得意なキー、不得意なキーを組み合わせ、それぞれの練習者に最適な練習コースを用意します。練習者に苦手意識を与えることがないよう、自然な形で練習テキストを自動編集するなど、最も効率的にタッチタイピングをマスターできるよう、様々な工夫を凝らしています。'
            }
          />
          <Panel
            num={'02'}
            lead={'持続させるための工夫'}
            body={
              'ゲームは使わずに、練習者に最適なアドバイスや励ましの言葉をかけることで、練習者のやる気を持続させます。また、親しみやすくもすっきりした画面で気持ちよく学習を続けることができます。'
            }
          />
          <Panel
            num={'03'}
            lead={'多彩なトレーニングコース'}
            body={
              'タッチタイピングの基礎を身に付ける基本コース（英字入力、ローマ字入力対応）に加え、タッチタイピングの基礎は身に付いているがさらにスキルアップを目指したい、という学習者を対象とした多彩なトレーニングコースをご用意しています。初心者から経験者まで、幅広くお使いいただけます。'
            }
          />
        </div>
      </div>
    </section>
  );
};

export default About;
