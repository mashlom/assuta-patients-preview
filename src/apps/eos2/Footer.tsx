import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type FooterProps = { name?: string };

const Footer: FC<FooterProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="footer-button" onClick={() => navigate('/instructions')}>
        <div className="bottom-menu-color"></div>
        <div className="text">הוראות שימוש</div>
      </div>
      <div className="footer-button" onClick={() => navigate('/antibiotics')}>
        <div className="bottom-menu-color"></div>
        <div className="text">טיפול אנטיביוטי</div>
      </div>
    </div>
  );
};

export default Footer;
