import InfoScreen from './InfoScreen/InfoScreen';
import styles from './InfoAndPriceScreen.module.scss';
import PriceScreen from './PriceScreen/PriceScreen';

export default function InfoAndPriceScreen() {
  return (
    <div className={styles.backgroundScreen}>
      <InfoScreen />
      <PriceScreen />
    </div>
  );
}
