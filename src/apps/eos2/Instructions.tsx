import React from 'react';
import { useNavigate } from 'react-router-dom';

const Instructions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div
        style={{ textAlign: 'center', width: '100%', paddingBottom: '20px' }}
      >
        <div className="back-button" onClick={() => navigate('/')}>
          <i className="fa-solid fa-arrow-right-long"></i>
        </div>
        <h4 className="subpage-header">שימוש במחשבון EOS</h4>
      </div>
      <div>
        <p className="paragraph-title">רקע</p>
        <p>
          אלח דם נאונטלי הוא הגורם העיקרי לתמותה ותחלואה בקרב תינוקות עד גיל 28
          יום. אלח דם יכול להיות מוקדם או מאוחר.
        </p>
        {/* Add the rest of the instructions content here */}
      </div>
    </div>
  );
};

export default Instructions;
