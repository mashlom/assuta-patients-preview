import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Calculator from './EosCalculator';
import Instructions from './Instructions';
import AntibioticTreatment from './AntibioticTreatment';
import './eos.css';

type PageType = 'CALCULATOR' | 'INSTRUCTIONS' | 'ANTIBIOTIC_TREATMENT';

interface EosAppProps {
  hospital: string;
}

const EosApp: React.FC<EosAppProps> = ({ hospital = 'asuta' }) => {
  const [page, setPage] = useState<PageType>('CALCULATOR');
  console.log('hospital:', hospital);
  const renderPage = () => {
    switch (page) {
      case 'CALCULATOR':
        return <Calculator />;
      case 'INSTRUCTIONS':
        return <Instructions />;
      case 'ANTIBIOTIC_TREATMENT':
        return <AntibioticTreatment />;
      default:
        return <Calculator />;
    }
  };

  return (
    <div className="app">
      <Header credit="אסותא אשדוד" />
      <main className="container main-content eos-main-content">
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
};

export default EosApp;
