import { BsPeople } from 'react-icons/bs';
import styles from './PriceScreen.module.scss';
import clsx from 'clsx';
import { BiBullseye } from 'react-icons/bi';
import { LuCircleCheckBig } from 'react-icons/lu';

export default function PriceScreen() {
  const pricesCard = [
    {
      icon: <BiBullseye className={styles.cardIcon} />,
      title: 'Платний двигун',
      subTitle: 'Paid Acquisition',
      imageOnBackground: 'images/dollarForCardPrice.png',
      classForHover: 'classForHoverBlue',
      listCard: [
        { text: 'Інвестовано в тест', value: '$1,200' },
        { text: 'Якісних заявок', value: '47' },
        {
          text: 'Вартість ліда (CPL)',
          value: '~$25',
          valueClass: 'highlightValue',
        },
      ],
      priceButtons: [
        {
          buttonText: 'Прогнозоване масштабування',
          buttonLink: '#',
        },
      ],
    },
    {
      icon: <BsPeople className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: 'Органічний двигун',
      subTitle: 'Organic Growth',
      imageOnBackground: 'images/fireForCardPrice.png',
      classForHover: 'classForHoverPurple',
      listCard: [
        { text: 'Органічних заявок', value: '23+' },
        {
          text: 'Витрати на рекламу',
          value: '0$',
          valueClass: 'highlightValue',
        },
        {
          text: 'Ефект',
          value: 'Продукт поширюється сам',
          valueClass: 'highlightText',
        },
      ],
      priceButtons: [
        {
          buttonText: 'Сильний Product-Market Fit',
          buttonLink: '#',
          classForColor: 'anotherColorButton',
        },
      ],
    },
  ];
  return (
    <section className={styles.price} id='result'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <p>Our Main Asset</p>
          </div>
          <h3 className={styles.titleScreen}>
            Підтверджений результат: <br /> <span>наш подвійний двигун зростання працює.</span>
          </h3>
          <div className={styles.blocksWithCardPrice}>
            {pricesCard.map((info, index) => (
              <div key={index} className={clsx(styles.card, styles[info.classForHover])}>
                <div className={styles.imageOnBackground}>
                  <img src={info.imageOnBackground} alt={`imageOnBackground${index}`} />
                </div>
                <div className={styles.iconAndTitleDescriptionBlock}>
                  <div
                    className={clsx(
                      styles.iconContainer,
                      index === 1 && styles.iconContainerGreen,
                    )}>
                    {info.icon}
                  </div>
                  <div className={styles.titleAndDescriptionBlock}>
                    <h4 className={styles.cardTitle}>{info.title}</h4>
                    <p
                      className={clsx(
                        styles.cardDescription,
                        index === 1 && styles.iconContainerGreen,
                      )}>
                      {info.subTitle}
                    </p>
                  </div>
                </div>
                <div className={styles.listBlockColumn}>
                  {info.listCard.map((item, index) => (
                    <div key={index} className={styles.listBlockRow}>
                      <p className={styles.listText}>{item.text}</p>
                      <p
                        className={clsx(
                          styles.listNumbText,
                          item.valueClass && styles[item.valueClass],
                        )}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className={styles.cardPriceButtonBlock}>
                  {info.priceButtons.map((button, index) => (
                    <a
                      key={index}
                      className={clsx(styles.cardPriceButton, styles[button.classForColor])}>
                      {button.buttonText}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.conclusionBlock}>
            <LuCircleCheckBig className={styles.iconCheck} />
            <h6 className={styles.conclusionText}>
              <span>Ключовий висновок:</span> 10% всіх заявок надійшли з Європи, що доводить
              глобальний попит і потенціал ціни x3.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
