import clsx from 'clsx';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.container}>
        <div className={styles.infoContent}>
          <h3 className={styles.titleScreen}>MECH.CAPITAL</h3>
          <p className={styles.textDescription}>© 2025 MECH Capital. All rights reserved.</p>
          <p className={clsx(styles.textDescription, styles.textDescriptionBottom)}>
            Estonia / Ukraine • MechOrbit
          </p>
        </div>
      </div>
    </footer>
  );
}
