import React from 'react';
import styles from './Hero.module.scss';
import { GoDotFill } from 'react-icons/go';
import { BsArrowRightShort, BsDownload } from 'react-icons/bs';
import clsx from 'clsx';

const Hero = ({ scrollToSection }) => {
  let value = 60;
  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <GoDotFill className={styles.badgeIndicator} />
            <p>Pre-seed Round Open</p>
          </div>
          <h1 className={styles.headline}>
            <span className={styles.gradientText}>Два двигуни зростання:</span> <br />
            платний і органічний.
          </h1>
          <div className={styles.descriptionBlock}>
            <p className={styles.description}>
              Ми інвестували $1200 в тестову рекламу. Результат: 47 якісних заявок (~$25/лід) і ще
              23+ прийшли органічно через "сарафанне радіо".
            </p>
            <p className={styles.description}>Обидва двигуни працюють. Ринок готовий до нас.</p>
          </div>
          <div className={styles.buttons}>
            <button onClick={() => scrollToSection('contacts')} className={styles.button}>
              <BsDownload className={styles.buttonIcon} />
              ⚡️ Запросити доступ до Pitch Deck
            </button>
            <button
              onClick={() => scrollToSection('result')}
              className={clsx(styles.button, styles.buttonTwo)}>
              Дивитись результати
              <BsArrowRightShort className={styles.buttonIconTwo} />
            </button>
          </div>

          <div className={styles.note}>70 заявок (47 Paid + 23 Organic) • Global Demand</div>
        </div>
        <div className={styles.visualContent}>
          <img src='images/heroImage.jpg' className={styles.backgroundImage} alt='cyber-cars' />
          <div className={styles.flyBlockWithLine}>
            <div className={styles.flyBlockBlockTexts}>
              <p>Paid Engine</p>
              <p className={styles.blueText}>Proven</p>
            </div>
            <h5 className={styles.flyBlockTitle}>47 leads</h5>
            <p className={styles.flyBlockDescription}>CPL ~$25</p>
            <div className={styles.progress}>
              <div className={styles.progressFill} style={{ width: `${value}%` }} />
            </div>
          </div>
          <div className={styles.flyBlockCost}>
            <div className={styles.flyBlockWithBackground}>
              <p>23</p>
            </div>
            <div className={styles.flyBlockTitleAndDescrColumn}>
              <h5 className={styles.flyBlockTitle}>Organic Leads</h5>
              <p className={styles.flyBlockDescription}>$0 Cost</p>
            </div>
          </div>

          <div className={styles.blockForLink}>
            <a href='https://mechorbit.com/' target='_blank'>
              <h4 className={styles.linkText}>mechorbit.com</h4>
            </a>
          </div>
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
      <div className={clsx(styles.neonCircle, styles.pinkPrint)}></div>
    </section>
  );
};

export default Hero;
