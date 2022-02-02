import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import Modal from '../Modal';
import Button from '../FormElements/Button';
import EmployerSignup from '../../pages/EmployerSignup';
import EmployerLogin from '../../pages/EmployerLogin';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);
  const openModalHandler2 = () => setShowModal2(true);
  const closeModalHandler2 = () => setShowModal2(false);
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
        header={'Login'}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeModalHandler2}>CLOSE</Button>}
      >
        <div className="formRender-container">
          <EmployerLogin />
        </div>
      </Modal>

      <header className="header-container">
        <div className="header-div">
          <Link to="/">
            <h1 className="app-name">Crispy Gigglers</h1>
          </Link>
          <nav className="text-center">
            {Auth.loggedIn() ? (
              <>
                <Link to="/employer-dashboard" className="a-header">
                  Dashboard
                </Link>
                <a href="/" className="a-header" onClick={logout}>
                  Logout
                </a>
              </>
            ) : (
              <>
                <p className="p-header" onClick={openModalHandler}>
                  Employer Signup
                </p>
                <p className="p-header" onClick={openModalHandler2}>
                  Login
                </p>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
