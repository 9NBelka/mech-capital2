import React from 'react';
import styles from './ProblemScreen.module.scss';
import clsx from 'clsx';
import { FaCog, FaStethoscope, FaWrench } from 'react-icons/fa';
import { LuBrain, LuWrench } from 'react-icons/lu';
import { FaArrowTrendUp } from 'react-icons/fa6';

export default function ProblemScreen() {
  const problems = [
    {
      icon: <LuWrench className={styles.cardIcon} />,
      title: 'Власний досвід',
      description:
        'Ми самі є клієнтами свого продукту. Ми відчули біль "паперового" бізнесу на власній шкірі і створили ліки для нього. ',
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <LuBrain className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Глибока експертиза',
      description:
        'Ми розуміємо внутрішню кухню автосервісу до найменших дрібниць, недоступних зовнішнім розробникам ПЗ.',
      classForHover: 'classForHoverPurple',
    },
    {
      icon: <FaArrowTrendUp className={clsx(styles.cardIcon, styles.colorOrange)} />,
      title: 'Перевірено на практиці',
      description:
        'Кожна функція MECHorbit пройшла бойове хрещення в реальних умовах нашої мережі, перш ніж потрапити до клієнтів.',
      classForHover: 'classForHoverOrange',
    },
  ];

  return (
    <section className={styles.problem} id=''>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <p>The Unfair Advantage</p>
          </div>
          <h3 className={styles.titleScreen}>Чому ми бачимо те, чого не бачать інші?</h3>

          <h5 className={styles.titleForDescription}>Ми створили продукт для самих себе.</h5>
          <p className={styles.textDescription}>
            Ми не просто SaaS-стартап. Ми — команда, що об'єднує глибоку експертизу в технологіях та
            практичний досвід управління власною мережею автосервісів. MECHorbit народився з нашого
            щоденного болю. Ми знаємо, що працює, а що — ні, бо перевірили це на власному бізнесі.
          </p>
          <div className={styles.blocksWithExperience}>
            {problems.map((problem, index) => (
              <div key={index} className={clsx(styles.card, styles[problem.classForHover])}>
                <div
                  className={clsx(
                    styles.iconContainer,
                    index === 1 && styles.iconContainerPurple,
                    index === 2 && styles.iconContainerOrange,
                  )}>
                  {problem.icon}
                </div>
                <h4 className={styles.cardTitle}>{problem.title}</h4>
                <p className={styles.cardDescription}>{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
    </section>
  );
}
