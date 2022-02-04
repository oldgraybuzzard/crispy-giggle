import React from 'react';
import Contact from '../ContactUs';
import logo from '../../assets/img/logo.png';

function Footer() {
  function fullYear() {
    const yearFormat = new Date();
    return yearFormat.getFullYear();
  }

  const Modal = Contact;

  return (
    <footer className="foot-Container">
      <h2 className="copyright">
        &copy; <span>{fullYear()} Crispy Gigglers</span> 
      </h2>
      
      <Modal />
    </footer>
  );
}

export default Footer;
