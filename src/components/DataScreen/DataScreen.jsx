import styles from './DataScreen.module.scss';
import clsx from 'clsx';
import { LuDatabase } from 'react-icons/lu';
import { GoGraph } from 'react-icons/go';
import { BsDiagram2 } from 'react-icons/bs';

export default function DataScreen() {
  const dataTextOnBlocks = [
    {
      icon: <LuDatabase className={styles.cardIcon} />,
      title: 'Власний досвід',
      description:
        'Ми самі є клієнтами свого продукту. Ми відчули біль "паперового" бізнесу на власній шкірі і створили ліки для нього. ',
      classForHover: 'classForHoverPurple',
    },
    {
      icon: <GoGraph className={clsx(styles.cardIcon, styles.colorBlue)} />,
      title: 'Глибока експертиза',
      description:
        'Ми розуміємо внутрішню кухню автосервісу до найменших дрібниць, недоступних зовнішнім розробникам ПЗ.',
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <BsDiagram2 className={clsx(styles.cardIcon, styles.colorOrange)} />,
      title: 'Перевірено на практиці',
      description:
        'Кожна функція MECHorbit пройшла бойове хрещення в реальних умовах нашої мережі, перш ніж потрапити до клієнтів.',
      classForHover: 'classForHoverOrange',
    },
  ];

  return (
    <section className={styles.dataScreen} id='dataScreen'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <p>The Big Vision</p>
          </div>
          <h3 className={styles.titleScreen}>
            Наш справжній продукт — <span>це дані.</span>
          </h3>
          <p className={styles.textDescription}>
            MECH — це не просто SaaS. Це майбутній Data Engine для всього ринку Aftermarket.
            Агреговані дані з мільйонів "цифрових автомобілів" стануть найціннішим активом компанії.
          </p>
          <div className={styles.blocksWithExperience}>
            {dataTextOnBlocks.map((text, index) => (
              <div key={index} className={clsx(styles.card, styles[text.classForHover])}>
                <div className={styles.iconAndTextBlock}>
                  <div
                    className={clsx(
                      styles.iconContainer,
                      index === 1 && styles.iconContainerBlue,
                      index === 2 && styles.iconContainerOrange,
                    )}>
                    {text.icon}
                  </div>
                  <h4 className={styles.cardTitleMain}>{text.title}</h4>
                </div>
                <div className={styles.cardTitleAndDescription}>
                  <h4 className={styles.cardTitle}>{text.title}</h4>
                  <p className={styles.cardDescription}>{text.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
      <div className={clsx(styles.neonCircle, styles.pinkPrint)}></div>
    </section>
  );
}
