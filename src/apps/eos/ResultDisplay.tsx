import React from 'react';

interface ResultDisplayProps {
  eosResult: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ eosResult }) => {
  return (
    <div id="result">
      <div id="eos">
        <span>סיכון לאלח דם מוקדם:</span>
        <span>{eosResult.toFixed(2)}</span>
        <span>לאלף לידות</span>
      </div>
      {/* Add more result display logic here */}
    </div>
  );
};

export default ResultDisplay;
