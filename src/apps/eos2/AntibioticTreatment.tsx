import React from 'react';
import { useNavigate } from 'react-router-dom';

const AntibioticTreatment: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div
        style={{ textAlign: 'center', width: '100%', paddingBottom: '20px' }}
      >
        <div className="back-button" onClick={() => navigate('/')}>
          <i className="fa-solid fa-arrow-right-long"></i>
        </div>
        <h4 className="subpage-header">הטיפול האנטיביוטי</h4>
      </div>
      <div>
        <ul>
          <li>
            הכיסוי האמפירי השגרתי הוא באמפיצילין במינון 50 מ"ג/ק"ג פעמיים ביום
            וגנטאמיצין בהתאם להוראות ה-NeoFax, בהתאמה לגיל ההיריון.
          </li>
          <li>
            במקרה של צמיחת חיידק בתרבית יש לבצע שינוי בטיפול לפי רגישות החיידק
            לאנטיביוטיקה.
          </li>
          <li>
            בילוד עם בדיקה גופנית תקינה והיעדר צמיחה בתרבית הדם ניתן לשקול
            בהיוועצות עם ניאונטולוג הפסקת טיפול האנטיביוטי כבר אחרי 36 שעות.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AntibioticTreatment;
