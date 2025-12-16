import styles from './InfoScreen.module.scss';
import Sphera from './Sphera/Sphera';
import clsx from 'clsx';
import { LuDatabase, LuLink } from 'react-icons/lu';
import { BsPhone } from 'react-icons/bs';
import { RxLightningBolt } from 'react-icons/rx';

export default function InfoScreen() {
  const informations = [
    {
      icon: <BsPhone className={styles.cardIcon} />,
      title: 'Залучення автовласника',
      description:
        'Автовласники завантажують безкоштовний додаток — «цифрову сервісну книжку». Ми даємо цінність водіям.',
    },
    {
      icon: <LuLink className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'З`єднання',
      description:
        'З`єднуємо з сервісом, передаючи повну історію авто та готовий чек-лист необхідних робіт.',
    },
    {
      icon: <LuDatabase className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: '«Захоплення» СТО',
      description:
        'Надаємо їм безкоштовний доступ до нашої CRM для обробки «гарячого» клієнта, інтегруючи їх в екосистему.',
    },
    {
      icon: <RxLightningBolt className={clsx(styles.cardIcon, styles.colorOrange)} />,
      title: 'Монетизація',
      description:
        'Пропонуємо СТО преміум-тарифи з незамінними інструментами, від яких вони вже не зможуть відмовитись.',
    },
  ];

  return (
    <section className={styles.informations} id='solution'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            Ми йдемо від клієнта,
            <br />
            <span> щоб безкоштовно "підключати" весь ринок СТО.</span>
          </h3>
          <p className={styles.textDescription}>
            Наша B2C2B-стратегія запускає самопідсилюючий цикл, який дозволяє нам захоплювати ринок
            з мінімальними витратами, використовуючи автовласника як "троянського коня".
          </p>

          <div className={styles.sphera}>
            <Sphera />
          </div>
          <div className={styles.blocksWithExperience}>
            {informations.map((information, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.iconAndTextBlock}>
                  <div className={styles.iconContainer}>{information.icon}</div>
                  <h4 className={styles.cardTitleMain}>
                    {index + 1}. {` `}
                    {information.title}
                  </h4>
                </div>
                <div className={styles.cardTitleAndDescription}>
                  <h4 className={styles.cardTitle}>
                    {index + 1}. {` `} {information.title}
                  </h4>
                  <p className={styles.cardDescription}>{information.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
