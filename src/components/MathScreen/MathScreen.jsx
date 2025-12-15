import React from 'react';
import styles from './MathScreen.module.scss';
import clsx from 'clsx';
import { FaArrowTrendDown } from 'react-icons/fa6';
import { CgFileDocument } from 'react-icons/cg';
import { BsExclamationTriangle } from 'react-icons/bs';

export default function MathScreen() {
  const mathtexts = [
    {
      icon: <CgFileDocument className={styles.cardIcon} />,
      title: 'Тотальний хаос',
      description:
        'Відсутність системного обліку перетворює бізнес на хаос, де неможливо планувати завантаження та контролювати ресурси.',
    },
    {
      icon: <FaArrowTrendDown className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Втрата до 30% прибутку',
      description:
        'Неефективність процесів, втрачені клієнти та "загублені" запчастини коштують сервісам третини їхнього потенційного доходу.',
    },
    {
      icon: <BsExclamationTriangle className={clsx(styles.cardIcon, styles.colorOrange)} />,
      title: 'Абсолютна недовіра',
      description:
        'Кінцевий споживач — автовласник — не довіряє "гаражному" підходу без прозорої історії та цифрових звітів.',
    },
  ];

  return (
    <section className={styles.mathBlock} id='problem'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <BsExclamationTriangle className={styles.tagBlockIcon} />
            <p>Проблема</p>
          </div>
          <h3 className={styles.titleScreen}>
            50% автосервісів досі працюють в блокнотах та Excel
          </h3>
          <p className={styles.textDescription}>
            Це не припущення. Це дані з наших перших 70+ органічних заявок. Ринок технологічно
            застряг у минулому столітті.
          </p>
          <div className={styles.blockGraphAndIconsBlocks}>
            <div className={styles.blockGraph}>
              <h4 className={styles.blockGraphTitle}>Технологічна прірва ринку</h4>
              <div className={styles.graph}>
                <div className={styles.graphRed}>
                  <img src='images/redGraph.png' />
                </div>
                <div className={styles.graphBlockText}>
                  <h5 className={styles.graphNumbText}>50%</h5>
                  <p className={styles.graphText}>Excel / Папір</p>
                </div>
                <div className={styles.graphBlue}>
                  <img src='images/blueGraph.png' />
                </div>
              </div>
              <div className={styles.graphNameBlock}>
                <div className={styles.dotWithTextBlock}>
                  <div className={styles.dot}></div>
                  <p>Застарілі методи</p>
                </div>
                <div className={styles.dotWithTextBlock}>
                  <div className={clsx(styles.dot, styles.dotBlue)}></div>
                  <p>Інші</p>
                </div>
              </div>
            </div>
            <div className={styles.iconsBlocks}>
              {mathtexts.map((mathtext, index) => (
                <div key={index} className={styles.card}>
                  <div
                    className={clsx(
                      styles.iconContainer,
                      index === 1 && styles.iconContainerPurple,
                      index === 2 && styles.iconContainerOrange,
                    )}>
                    {mathtext.icon}
                  </div>
                  <div className={styles.cardTitleAndDescription}>
                    <h4 className={styles.cardTitle}>{mathtext.title}</h4>
                    <p className={styles.cardDescription}>{mathtext.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
