import styles from './footer.module.scss';
import getConfig from 'next/config';
import Logo from './img/logo.svg';

const { publicRuntimeConfig } = getConfig();
const link = 'https://site.live.nicovideo.jp/rule.html';

const Footer = () => {
  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || '';

  return (
    <footer className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Logo />
          <p>日本データパシフィック株式会社</p>
        </div>
        <address className={styles.address}>
          〒186-0002 東京都国立市東1-4-15 国立KTビル<br></br>Tel.042-573-6721 Fax.042-573-6728
        </address>
        <p className={styles.copyright}>&copy; 2024 DATA PACIFIC（JAPAN）Ltd. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;