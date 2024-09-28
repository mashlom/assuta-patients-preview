import React from 'react';

interface ClinicalRecommendationProps {
  condition: string;
  risk: string;
}

const ClinicalRecommendation: React.FC<ClinicalRecommendationProps> = ({
  condition,
  risk,
}) => {
  const getRecommendation = () => {
    // Implement the recommendation logic based on the condition and risk
    // This is a placeholder for the actual implementation
    return 'ROUTINE_VITALS';
  };

  const recommendation = getRecommendation();

  return (
    <div>
      <h5>{condition}</h5>
      <p>
        סיכון לאלף לידות: <span className="eos-per-condition">{risk}</span>
      </p>
      {recommendation === 'ROUTINE_VITALS' && (
        <>
          <p>יש לבצע מעקב שגרתי:</p>
          <ul>
            <li>סימנים חיוניים אחת למשמרת.</li>
            <li>בדיקת רופא ילדים נוספת בין גיל 12 ל- 24 שעות.</li>
            <li>בדיקה נוספת בכל החמרה במצב או תוצאת סימנים חיוניים חריגה.</li>
          </ul>
          <p>יש לציין את ערך הסיכון המשוקלל בגיליון היילוד.</p>
        </>
      )}
      {/* Implement other recommendation types similarly */}
    </div>
  );
};

export default ClinicalRecommendation;
