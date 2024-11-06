import styles from './product.module.scss';
import Image from 'next/image';
import Heading from '@components/common/section-heading/sectionHeading';
import HeadContent from '@components/common/head-content/headContent';
import Thumbnail from '@components/common/thumbnail/thumbnail';
import Image01 from './images/image01.png';
import Image02 from './images/image02.png';
import Image03 from './images/image03.png';
import Image04 from './images/image04.png';

const Prtoducts = (props: any) => {
  return (
    <section className={styles.wrapper} id="product">
      <div className={styles.inner}>
        <Heading en="Product" ja="製品" />
        <div className={styles.content}>
          <div className={styles.headContentWrapper}>
            <HeadContent
              headingText={'USB版'}
              headingLevel={3}
              text={'使用期限がないため、利用環境に変更がない限りずっとご利用いただけます。'}
              thumbnail={
                <Image src={Image01} alt="USB版の画像" width={360} height={420} className={styles.thumbnail} />
              }
              price={'8,140円（税込）'}
            />
            <HeadContent
              headingText={'クラウド版'}
              headingLevel={3}
              text={'インターネット環境があれば、いつでもどこでも練習可能です。ご購入後1年間ご利用いただけます。'}
              thumbnail={
                <Image src={Image02} alt="クラウド版の画像" width={360} height={420} className={styles.thumbnail} />
              }
              price={'6,380円（税込）'}
            />
          </div>
        </div>
        <div className={styles.content}>
          <HeadContent
            headingText={['TypeQuick for Schools', <small key="">（小･中･高生向け）</small>]}
            headingLevel={3}
            text={
              'TypeQuick for Schools は、従来のTypeQuick Professional の良さを維持しつつ、より親しみやすいコースに仕上げたものです。'
            }
          />
          <div className={styles.headContentWrapper}>
            <div className={styles.headContentInner}>
              <HeadContent
                headingText={'アニメーションで楽しく学習'}
                headingType={4}
                headingLevel={4}
                text={
                  'アニメーションを用いた学習画面で、より楽しく継続して学習を進められるよう工夫されています。基本的なトレーニング方法はProfessionalと同じです。'
                }
              />
              <HeadContent
                headingText={'学習を継続できる「ストーリー」'}
                headingType={4}
                headingLevel={4}
                text={
                  '主人公“キワラ”が仙人から秘密の地図を受け取り、イージー王国を目指して冒険の旅へ出かけるところからスタートします。タイピング練習が進めば目的地までの距離も縮まっていきます。'
                }
              />
            </div>
            <div className={styles.thumbnailWrapper}>
              <Thumbnail
                thumbnail={<Image src={Image03} alt="USB版の画像" width={300} height={276} />}
                text={[
                  'USB版',
                  <span key="" className={'is-pc'}>
                    ：
                  </span>,
                  <br key="" className={'is-sp'} />,
                  '8,140円（税込）',
                ]}
                textSize={'lg'}
              />
              <Thumbnail
                thumbnail={<Image src={Image04} alt="クラウド版の画像" width={210} height={280} />}
                text={[
                  'クラウド版',
                  <span key="" className={'is-pc'}>
                    ：
                  </span>,
                  <br key="" className={'is-sp'} />,
                  '6,380円（税込）',
                ]}
                textSize={'lg'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prtoducts;
