import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClinicalRecommendation from './ClinicalRecommendation';

interface EosResult {
  eos: number;
  eosString: string;
  eosPerClinicalCondition: {
    [key: string]: string;
  };
}

const Calculator: React.FC = () => {
  const [intercept, setIntercept] = useState<number>(0.5);
  const [temperature, setTemperature] = useState<string>('');
  const [rom, setRom] = useState<string>('');
  const [pregnancyLengthWeeks, setPregnancyLengthWeeks] = useState<string>('');
  const [pregnancyLengthDays, setPregnancyLengthDays] = useState<string>('');
  const [antibioticTreatment, setAntibioticTreatment] = useState<string>('');
  const [gbs, setGbs] = useState<string>('');
  const [eosResult, setEosResult] = useState<EosResult | null>(null);
  const [temperatureValidity, setTemperatureValidity] = useState<boolean>(true);
  const [pregnancyWeekValidity, setPregnancyWeekValidity] = useState<boolean>(true);

  const navigate = useNavigate();

  const resetAll = () => {
    setIntercept(0.5);
    setTemperature('');
    setRom('');
    setPregnancyLengthWeeks('');
    setPregnancyLengthDays('');
    setAntibioticTreatment('');
    setGbs('');
    setEosResult(null);
  };

  const isValidTemperature = () => {
    const temp = parseFloat(temperature.replace(',', '.'));
    return temp >= 36 && temp <= 40;
  };

  const isValidPregnancyWeek = () => {
    const weeks = parseInt(pregnancyLengthWeeks);
    return weeks >= 34 && weeks <= 43;
  };

  const checkTemperature = () => {
    setTemperatureValidity(!temperature || isValidTemperature());
  };

  const checkPregnancyLength = () => {
    setPregnancyWeekValidity(!pregnancyLengthWeeks || isValidPregnancyWeek());
  };

  const allValuesSatisfied = () => {
    return (
      !!intercept &&
      !!temperature &&
      !!rom &&
      !!pregnancyLengthWeeks &&
      !!antibioticTreatment &&
      !!gbs &&
      isValidPregnancyWeek() &&
      isValidTemperature()
    );
  };

  const computeEOS = () => {
    if (!allValuesSatisfied()) {
      return false;
    }
    // Implement the EOS calculation logic here
    // This is a placeholder for the actual calculation
    const calculatedEos = 0.5; // Replace with actual calculation
    setEosResult({
      eos: calculatedEos,
      eosString: (calculatedEos * 1000).toFixed(2),
      eosPerClinicalCondition: {
        'Well Appearing': (calculatedEos * 0.41 * 1000).toFixed(2),
        'Equivocal': (calculatedEos * 5.0 * 1000).toFixed(2),
        'Clinical Illness': (calculatedEos * 21.2 * 1000).toFixed(2),
      },
    });
    return true;
  };

  useEffect(() => {
    checkTemperature();
  }, [temperature]);

  useEffect(() => {
    checkPregnancyLength();
  }, [pregnancyLengthWeeks]);

  return (
    <div id="calculator" style={{ overflowY: 'auto', overflowX: 'hidden', paddingBottom: '10px' }}>
      {/* Implement the calculator form here */}
      {/* Use the state variables and functions defined above */}
      {/* Render the ClinicalRecommendation component when eosResult is available */}
      {eosResult && (
        <>
          <ClinicalRecommendation condition="Well Appearing" risk={eosResult.eosPerClinicalCondition['Well Appearing']} />
          <ClinicalRecommendation condition="Equivocal" risk={eosResult.eosPerClinicalCondition['Equivocal']} />
          <ClinicalRecommendation condition="Clinical Illness" risk={eosResult.eosPerClinicalCondition['Clinical Illness']} />
        </>
      )}
    </div>
  );
};

export default Calculator;