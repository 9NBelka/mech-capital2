import clsx from 'clsx';
import styles from './Navigation.module.scss';

export default function Navigation({ handleScroll, tablet }) {
  return (
    <nav className={clsx(styles.nav, tablet && styles.navMobile)}>
      <a onClick={() => handleScroll('problem')} className={styles.navLink}>
        Проблема
      </a>
      <a onClick={() => handleScroll('solution')} className={styles.navLink}>
        Рішення
      </a>
      <a onClick={() => handleScroll('result')} className={styles.navLink}>
        Результати
      </a>
      <button className={styles.buttonInvest}>Invest Now</button>
    </nav>
  );
}
