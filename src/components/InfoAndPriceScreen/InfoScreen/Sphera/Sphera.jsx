import { PiGlobeSimple } from 'react-icons/pi';
import styles from './Sphera.module.scss';
import clsx from 'clsx';
import { LuBrain, LuFactory, LuWrench } from 'react-icons/lu';
import { BsBoxSeam, BsPeople } from 'react-icons/bs';
import { GoPulse } from 'react-icons/go';

export default function Sphera() {
  const iconsAndText = [
    {
      icon: <GoPulse className={styles.cardIcon} />,
      title: 'CRM',
      classForIconBlock: 'iconContainerCRM',
      class: 'positionCRM',
    },
    {
      icon: <LuFactory className={styles.cardIcon} />,
      title: 'MANUFACTURER',
      classForIconBlock: 'iconContainerMANUFACTURER',
      class: 'positionMANUFACTURER',
    },
    {
      icon: <LuBrain className={styles.cardIcon} />,
      title: 'AI',
      classForIconBlock: 'iconContainerAI',
      class: 'positionAI',
    },
    {
      icon: <LuWrench className={styles.cardIcon} />,
      title: 'MECHANIK',
      classForIconBlock: 'iconContainerMECHANIK',
      class: 'positionMECHANIK',
    },
    {
      icon: <BsPeople className={styles.cardIcon} />,
      title: 'CLIENT',
      classForIconBlock: 'iconContainerCLIENT',
      class: 'positionCLIENT',
    },
    {
      icon: <BsBoxSeam className={styles.cardIcon} />,
      title: 'DEALER',
      classForIconBlock: 'iconContainerDEALER',
      class: 'positionDEALER',
    },
  ];

  return (
    <div className={styles.spheraMainBlock}>
      <div className={styles.circlesBlock}>
        <div className={styles.borderCirclePurple}></div>
        <div className={styles.borderCircleBlue}></div>
        <div className={styles.blockForMainIcon}>
          <PiGlobeSimple className={styles.mainIcon} />
        </div>
        <div className={styles.iconsAndTextBlock}>
          {iconsAndText.map((information, index) => (
            <div key={index} className={clsx(styles.iconsAndText, styles[information.class])}>
              <div className={clsx(styles.iconContainer, styles[information.classForIconBlock])}>
                {information.icon}
              </div>
              <h4
                className={clsx(
                  styles.cardTitle,
                  index === 1 && styles.cardTitleCyan,
                  index === 2 && styles.cardTitlePurple,
                  index === 3 && styles.cardTitleLightGreen,
                  index === 4 && styles.cardTitleLightBlue,
                  index === 5 && styles.cardTitleOrange,
                )}>
                {information.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
