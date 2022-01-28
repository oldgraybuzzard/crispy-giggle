import React from 'react';
import Contact from '../ContactUs';

function Footer() {
  function fullYear() {
    const yearFormat = new Date();
    return yearFormat.getFullYear();
  }

  return (
    <footer className="foot-Container">
      <h2 className="copyright">
        &copy; <span>{fullYear()}</span> Crispy Gigglers
      </h2>
      <a href="/" className="footer-contact">
        Contact Us
      </a>
    </footer>
  );
}

export default Footer;
