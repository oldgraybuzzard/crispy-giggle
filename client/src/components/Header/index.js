import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import Modal from '../Modal';
import Button from '../FormElements/Button';
import EmployerSignup from '../../pages/EmployerSignup';
import EmployerLogin from '../../pages/EmployerLogin';
import EmployeeLogin from '../../pages/EmployeeLogin';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  const [showModal, setShowModal] = useState(false);

  const [showModal2, setShowModal2] = useState(false);

  const [showModal3, setShowModal3] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  const openModalHandler2 = () => setShowModal2(true);
  const closeModalHandler2 = () => setShowModal2(false);

  const openModalHandler3 = () => setShowModal3(true);
  const closeModalHandler3 = () => setShowModal3(false);

  const isEmployer = () => {
    if ((Auth.getIsEmployer === true) & Auth.loggedIn()) {
      return (
        <>
          <Link to="/employer-dashboard" className="a-header">
            Dashboard
          </Link>
          <a href="/" className="a-header" onClick={logout}>
            Logout
          </a>
        </>
      );
    } else if (Auth.getIsEmployer === false && Auth.loggedIn()) {
      return (
        <>
          <Link to="/employee-dashboard" className="a-header">
            Dashboard
          </Link>
          <a href="/" className="a-header" onClick={logout}>
            Logout
          </a>
        </>
      );
    } else {
      return (
        <>
          <p className="p-header" onClick={openModalHandler}>
            Employer Signup
          </p>
          <p className="p-header" onClick={openModalHandler3}>
            Employee Login
          </p>
          <p className="p-header" onClick={openModalHandler2}>
            Employer Login
          </p>
        </>
      );
    }
  };

  return (
    <>
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={'Employer Signup'}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeModalHandler}>CLOSE</Button>}
      >
        <div className="formRender-container">
          <EmployerSignup />
        </div>
      </Modal>

      <Modal
        show={showModal2}
        onCancel={closeModalHandler2}
        header={'Employer Login'}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeModalHandler2}>CLOSE</Button>}
      >
        <div className="formRender-container">
          <EmployerLogin />
        </div>
      </Modal>

      <Modal
        show={showModal3}
        onCancel={closeModalHandler3}
        header={'Employee Login'}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeModalHandler3}>CLOSE</Button>}
      >
        <div className="formRender-container">
          <EmployeeLogin />
        </div>
      </Modal>

      <header className="header-container">
        <div className="header-div">
          <Link to="/">
            <h1 className="app-name">Crispy Gigglers</h1>
          </Link>
          <nav className="text-center">{isEmployer()}</nav>
        </div>
      </header>
    </>
  );
};
export default Header;
