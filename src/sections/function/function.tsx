import styles from './function.module.scss';
import Image from 'next/image';
import Heading from '@components/common/section-heading/sectionHeading';
import HeadContent from '@components/common/head-content/headContent';
import Thumbnail from '@components/function/thumbnail/thumbnail';
import Image01 from './images/image01.jpg';
import Image02 from './images/image02.jpg';
import Image03 from './images/image03.jpg';
import Image04 from './images/image04.jpg';
import Image05 from './images/image05.jpg';
import Image06 from './images/image06.jpg';

const Function = (props: any) => {
  return (
    <section className={styles.wrapper} id="function">
      <div className={styles.inner}>
        <Heading en="Fuction" ja="コースと機能" />
        <div className={styles.content}>
          <HeadContent
            headingText={'キーボード練習コース'}
            headingLevel={3}
            headingType={2}
            headingSubText={'全10レッスン'}
            headingSubLevel={4}
            headingSubType={4}
            bodyText={
              'タッチタイピングを基礎から身に付けるためのトレーニングコースです。ローマ字入力と英字入力に対応しています。'
            }
          />
          <div className={styles.headContent}>
            <HeadContent
              headingText={'Lesson1〜８［基礎練習］'}
              headingLevel={5}
              bodyText={'1つ1つのキーの位置と正しい打ち方を、グループごとに練習します。'}
              bodySubText={
                '正しい姿勢や、指使いを学習し、1つ1つのキーの正しい打ち方を学んでいきます。その後、学習済みのキーを組み合わせた文章や単語を練習していきます。'
              }
            />
            <HeadContent
              headingText={'Lesson9〜10［総合練習］'}
              headingLevel={5}
              bodyText={'スピードと正確さの練習を交互に行い、タイピングスキルをブラッシュアップしていきます。'}
              bodySubText={
                '不得意なキーや単語は練習テキストに自動的に組み込まれ自然な形で出題されるので、本人も知らないうちに苦手なキーを克服することができます。'
              }
            />
          </div>
          <div className={styles.image}>
            <Thumbnail
              thumbnail={<Image src={Image01} alt="アニメーション画面" width={320} height={200} />}
              caption={
                '最初にアニメーションで正しい姿勢や指使いをわかりやすく説明。初心者の方でも安心して学習できます。'
              }
            />
            <Thumbnail
              thumbnail={<Image src={Image02} alt="キーボード画面" width={320} height={200} />}
              caption={
                '新しいキーを練習するときには必ず画面にキーボード図が表示され、ホームポジションキーとの組み合わせで覚えられます。'
              }
            />
            <Thumbnail
              thumbnail={<Image src={Image03} alt="レッスン終了画面" width={320} height={200} />}
              caption={
                'レッスンが終了するたびに学習者の練習結果と練習状況に合わせたコメントが表示されますので励みになります。'
              }
            />
          </div>
        </div>
        <div className={styles.content}>
          <HeadContent
            headingText={'スキルアップコース'}
            headingType={2}
            headingLevel={3}
            bodyText={'スキルアップのための多彩な練習コースの一部です。'}
          />
          <div className={styles.headContent}>
            <div className={styles.headContentInner}>
              <HeadContent
                headingText={'タイピングテスト'}
                headingType={5}
                headingLevel={4}
                bodyText={'文章入力テスト（クラウド版では時間制限テスト）で実力をチェックできます。'}
                border
              />
              <HeadContent
                headingText={'テンキーレッスン'}
                headingType={5}
                headingLevel={4}
                bodyText={'データ入力に役立つ数字キーの練習をします。'}
                border
              />
            </div>
            <div className={styles.headContentInner}>
              <HeadContent
                headingText={'変換レッスン'}
                headingType={5}
                headingLevel={4}
                bodyText={'日本語の文章作成には欠かせないローマ字入力のレッスンです。'}
                border
              />
              <HeadContent
                headingText={'記号入力レッスン'}
                headingType={5}
                headingLevel={4}
                bodyText={'よく使われる記号を集中的に練習します。'}
                border
              />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <HeadContent headingText={'学習者機能'} headingType={2} headingLevel={3} />
          <HeadContent
            headingText={'学習履歴'}
            headingLevel={4}
            bodyText={
              'レッスンの結果は、いつでも確認したり印刷することができます。\n成績を確認して苦手を把握し、効率よくタッチタイピングを習得することができます。'
            }
          />
          <div className={styles.headContent}>
            <HeadContent
              headingText={'レッスン成績'}
              headingLevel={5}
              headingType={4}
              bodyText={
                'レッスン毎のスピードや正確率、練習日時などを一覧表示。クラウド版は最近20日間の練習状況をグラフで確認可能です。'
              }
              thumbnail={<Image src={Image04} alt="レッスン成績の画像" width={482} height={300} />}
            />
            <HeadContent
              headingText={'キーグラフ'}
              headingLevel={5}
              headingType={4}
              bodyText={
                'キー毎のスピード、エラー率を棒グラフで表示。目標スピードと自分の実際のスピードを比較可能です。'
              }
              thumbnail={<Image src={Image05} alt="キーグラフの画像" width={482} height={300} />}
            />
          </div>
          <div className={styles.headContent}>
            <HeadContent
              headingText={'設定'}
              headingLevel={3}
              headingType={3}
              bodyText={'練習者にあわせた各種設定が可能です。'}
              bodyList={[
                '目標スピード',
                '音声ガイドやエラー音のオン / オフ',
                '行末に使用するキー（スペースバーまたはエンターキー）',
                '画面テキストのフォント、サイズ、色の変更',
                'ローマ字入力のカスタマイズ（クラウド版のみ）',
              ]}
            />
            <HeadContent
              headingText={'ランキング（クラウド版限定）'}
              headingLevel={3}
              headingType={3}
              bodyText={'練習結果をランキング形式で表示できます。'}
              thumbnail={<Image src={Image06} alt="ランキングの画像" width={482} height={300} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Function;
