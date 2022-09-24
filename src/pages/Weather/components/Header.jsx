import styles from '../css/Header.less';
import { useIntl } from 'umi';

function Header() {
  const intl = useIntl();

  return (
    <div>
      <ul className={styles.navbar}>
        <li className={styles.navbarItem}>
          {intl.formatMessage({
            id: 'pages.weather.header.weather',
            defaultMessage: 'Weather',
          })}
          <div className={styles.ping}></div>
        </li>
        <li className={styles.navbarItem}>
          {intl.formatMessage({
            id: 'pages.weather.header.arlet',
            defaultMessage: 'Arlet',
          })}
        </li>
        <li className={styles.navbarItem}>
          {intl.formatMessage({
            id: 'pages.weather.header.map',
            defaultMessage: 'Map',
          })}</li>
        <li className={styles.navbarItem}>
          {intl.formatMessage({
            id: 'pages.weather.header.satellite',
            defaultMessage: 'Satellite',
          })}</li>
        <li className={styles.navbarItem}>
          {intl.formatMessage({
            id: 'pages.weather.header.news',
            defaultMessage: 'News',
          })}</li>
      </ul>
    </div>
  );
}

export default Header;
