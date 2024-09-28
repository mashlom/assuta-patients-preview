// import React, { useState, useEffect } from 'react';
// import ResultDisplay from './ResultDisplay';

// const EosCalculator: React.FC = () => {
//   const [formData, setFormData] = useState({
//     temperature: '',
//     pregnancyLengthWeeks: '',
//     pregnancyLengthDays: '',
//     rom: '',
//     gbs: '',
//     antibioticTreatment: '',
//   });

//   const [eosResult, setEosResult] = useState<number | null>(null);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const calculateEOS = () => {
//     // Implement EOS calculation logic here
//     // This will replace the ctrl.computeEOS() function from the original JS
//     // You'll need to port over the calculation logic from the original JS file
//     const calculatedEOS = 0; // Placeholder for actual calculation
//     setEosResult(calculatedEOS);
//   };

//   useEffect(() => {
//     if (eosResult !== null) {
//       const resultElement = document.getElementById('eos');
//       resultElement?.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [eosResult]);

//   return (
//     <div id="calculator">
//       <h1>
//         אלח דם <span>(Early-Onset Sepsis)</span>
//       </h1>
//       <form>
//         {/* Convert all input fields from the original HTML */}
//         <div className="form-group">
//           <label htmlFor="temperature">חום אימהי מקסימלי:</label>
//           <input
//             type="number"
//             id="temperature"
//             name="temperature"
//             value={formData.temperature}
//             onChange={handleInputChange}
//             min="36"
//             max="40"
//           />
//         </div>
//         {/* Add more form fields here */}
//       </form>
//       <button onClick={calculateEOS}>חשב</button>
//       {eosResult !== null && <ResultDisplay eosResult={eosResult} />}
//     </div>
//   );
// };

// export default EosCalculator;

// components/Calculator.tsx
import React, { useState, useEffect } from 'react';
import ResultDisplay from './ResultDisplay';
import './eos.css';

interface FormData {
  temperature: string;
  pregnancyLengthWeeks: string;
  pregnancyLengthDays: string;
  rom: string;
  gbs: string;
  antibioticTreatment: string;
}

const EosCalculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    temperature: '',
    pregnancyLengthWeeks: '',
    pregnancyLengthDays: '',
    rom: '',
    gbs: '',
    antibioticTreatment: '',
  });
  const [eosResult, setEosResult] = useState<number | null>(null);
  const [temperatureValidity, setTemperatureValidity] = useState(true);
  const [pregnancyWeekValidity, setPregnancyWeekValidity] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const checkTemperature = () => {
    const temp = parseFloat(formData.temperature);
    setTemperatureValidity(!formData.temperature || (temp >= 36 && temp <= 40));
  };

  const checkPregnancyLength = () => {
    const weeks = parseInt(formData.pregnancyLengthWeeks);
    setPregnancyWeekValidity(!formData.pregnancyLengthWeeks || (weeks >= 34 && weeks <= 43));
  };

  const allValuesSatisfied = () => {
    return Object.values(formData).every(value => value !== '') &&
           temperatureValidity && pregnancyWeekValidity;
  };

  const computeEOS = () => {
    if (!allValuesSatisfied()) return;

    // Implement EOS calculation logic here
    // This should replicate the logic from the original JS file
    const calculatedEOS = 0; // Placeholder for actual calculation
    setEosResult(calculatedEOS);
  };

  useEffect(() => {
    if (eosResult !== null) {
      const resultElement = document.getElementById('eos');
      resultElement?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [eosResult]);

  return (
    <div id="calculator">
      <h1>אלח דם <span>(Early-Onset Sepsis)</span></h1>
      <form>
        <div className="form-group">
          <label htmlFor="temperature">חום אימהי מקסימלי:</label>
          <input
            type="number"
            id="temperature"
            name="temperature"
            value={formData.temperature}
            onChange={handleInputChange}
            onBlur={checkTemperature}
            min="36"
            max="40"
          />
          {!temperatureValidity && <span className="error">המחשבון מתייחס לחום בטווח 36-40 בלבד.</span>}
        </div>
        {/* Add more form fields here */}
      </form>
      <button onClick={computeEOS} disabled={!allValuesSatisfied()}>חשב</button>
      {eosResult !== null && <ResultDisplay eosResult={eosResult} />}
    </div>
  );
};

export default EosCalculator;

// Calculator.css


/* Add more specific styles for the calculator here */