// components/ClinicalRecommendation.tsx
import React from 'react';

type RecommendationType =
  | 'ROUTINE_VITALS'
  | 'VITALS_EVERY_4_HOURS'
  | 'BLOOD_CULTURE_VITALS_EVERY_4_HOURS'
  | 'ANTIBIOTICS_VITALS_PER_NICU';

interface ClinicalRecommendationProps {
  risk: number;
  recommendation: RecommendationType;
}

const ClinicalRecommendation: React.FC<ClinicalRecommendationProps> = ({
  risk,
  recommendation,
}) => {
  return (
    <div>
      <p>
        סיכון לאלף לידות:{' '}
        <span className="eos-per-condition">{risk.toFixed(2)}</span>
      </p>

      {recommendation === 'ROUTINE_VITALS' && (
        <div>
          <p>יש לבצע מעקב שגרתי:</p>
          <ul>
            <li>סימנים חיוניים אחת למשמרת.</li>
            <li>בדיקת רופא ילדים נוספת בין גיל 12 ל- 24 שעות.</li>
            <li>בדיקה נוספת בכל החמרה במצב או תוצאת סימנים חיוניים חריגה.</li>
          </ul>
          <p>יש לציין את ערך הסיכון המשוקלל בגיליון היילוד.</p>
        </div>
      )}

      {recommendation === 'VITALS_EVERY_4_HOURS' && (
        <div>
          <ul>
            <li>
              יש לבצע מעקב קליני:
              <ul>
                <li>סימנים חיוניים כל 4 שעות.</li>
                <li>
                  בדיקת רופא פעמיים ביום ביממה הראשונה לחיים, ובהמשך לפי הערכה
                  קלינית.
                </li>
                <li>
                  בדיקה נוספת בכל החמרה במצב קליני או תוצאת סימנים חיוניים
                  חריגה.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}

      {recommendation === 'BLOOD_CULTURE_VITALS_EVERY_4_HOURS' && (
        <div>
          <ul>
            <li>
              יש לבצע מעקב קליני:
              <ul>
                <li>סימנים חיוניים כל 4 שעות.</li>
                <li>
                  בדיקת רופא פעמיים ביום ביממה הראשונה לחיים, ובהמשך לפי הערכה
                  קלינית.
                </li>
                <li>
                  בדיקה נוספת בכל החמרה במצב קליני או תוצאת סימנים חיוניים
                  חריגה.
                </li>
              </ul>
            </li>
            <li>יש לקחת תרבית.</li>
            <li>להפעיל שיקול קליני כוללני בייעוץ עם רופא בכיר.</li>
          </ul>
        </div>
      )}

      {recommendation === 'ANTIBIOTICS_VITALS_PER_NICU' && (
        <div>
          <ul>
            <li>
              יש לבצע מעקב קליני:
              <ul>
                <li>סימנים חיוניים כל 4 שעות.</li>
                <li>
                  בדיקת רופא פעמיים ביום ביממה הראשונה לחיים, ובהמשך לפי הערכה
                  קלינית.
                </li>
                <li>
                  בדיקה נוספת בכל החמרה במצב קליני או תוצאת סימנים חיוניים
                  חריגה.
                </li>
              </ul>
            </li>
            <li>התוויה לבירור.</li>
            <li>נדרש טיפול אנטיביוטי אמפירי.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClinicalRecommendation;
