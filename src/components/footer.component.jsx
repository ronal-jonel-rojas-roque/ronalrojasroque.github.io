import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../common/style-footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social-icons">
        <a href="https://www.facebook.com/RonalRojasRoqueJ" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="footer__icon-f" />
        </a>
        <a href="https://www.instagram.com/ronalrojasroquej/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer__icon-i" />
        </a>
        <a href="https://www.linkedin.com/in/ronal-rojas-a39772276" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer__icon-l" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;