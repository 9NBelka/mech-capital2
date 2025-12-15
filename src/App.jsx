import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProblemScreen from './components/ProblemScreen/ProblemScreen';
import MathScreen from './components/MathScreen/MathScreen';
import InfoAndPriceScreen from './components/InfoAndPriceScreen/InfoAndPriceScreen';
import DataScreen from './components/DataScreen/DataScreen';
import OpportunityScreen from './components/OpportunityScreen/OpportunityScreen';
import Footer from './components/Footer/Footer';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.replace('#', ''));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <ScrollToHash />
      <Header isScrolled={isScrolled} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <ProblemScreen />
        <MathScreen />
        <InfoAndPriceScreen />
        <DataScreen />
        <OpportunityScreen />
      </main>
      <Footer />
    </div>
  );
};

export default App;
