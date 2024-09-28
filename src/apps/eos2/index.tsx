import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './Calculator';
import AntibioticTreatment from './AntibioticTreatment';
import Instructions from './Instructions';
import Footer from './Footer';
import './EosStyles.css'; 

const EosApp: React.FC = () => {
  return (
    <Router>
      <div className="container main-content eos-main-content">
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/antibiotics" element={<AntibioticTreatment />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default EosApp;