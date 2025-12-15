import clsx from 'clsx';
import styles from './OpportunityScreen.module.scss';
import { BsArrowRightShort, BsDownload } from 'react-icons/bs';
import { LuMail } from 'react-icons/lu';

export default function OpportunityScreen() {
  return (
    <section className={styles.opportunity} id='opportunity'>
      <div className={styles.container}>
        <div className={styles.infoContentMain}>
          <div className={styles.infoContent}>
            <div className={styles.tagBlock}>
              <p>The Opportunity</p>
            </div>
            <h3 className={styles.titleScreen}>
              Ми залучаємо pre-seed/seed раунд для підготовки до глобальної експансії
            </h3>
            <p className={styles.textDescription}>
              Ми шукаємо стратегічних партнерів, які допоможуть нам "підлити бензину" в наші
              перевірені двигуни зростання та масштабувати успіх на весь світ.
            </p>
            <div className={styles.buttons}>
              <a className={styles.button}>
                <BsDownload className={styles.buttonIcon} />
                ⚡️ Запросити доступ до Pitch Deck
              </a>
              <a
                href='mailto:belka.nik02@gmail.com'
                className={clsx(styles.button, styles.buttonTwo)}
                target='_blank'>
                <LuMail className={styles.buttonIconTwo} />
                ✉️ Зв'язатися з засновником
              </a>
            </div>
            <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
            <div className={clsx(styles.neonCircle, styles.pinkPrint)}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
