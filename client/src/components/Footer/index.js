import React from 'react';
import Contact from '../ContactUs';


function Footer() {
    function fullYear() {
        const yearFormat = new Date();
        return yearFormat.getFullYear();
    };

    const Modal = Contact
    const [open, setOpen] = React.useState(false)

    return (
        <footer className='foot-Container'>
            <h2 className='copyright'>&copy; <span>{fullYear()}</span> Crispy Gigglers</h2>
            <Modal />          
           
        </footer>
    );
};

export default Footer;