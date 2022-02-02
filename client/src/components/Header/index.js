import React, { useState } from 'react';

import Modal from '../Modal';
import Button from '../FormElements/Button';
import EmployerSignup from '../../pages/EmployerSignup';
import EmployerLogin from '../../pages/EmployerLogin';

const Header = props => {
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

      <header className="flex-row px-1 header-style">
        <ul className="flex-row">
          <li>
            <h2>Crispy Gigglers</h2>
          </li>
          <li className="mx-2">
            <p onClick={openModalHandler}> Employer Signup</p>
          </li>
          <li className="mx-2">
            <p onClick={openModalHandler2}> Login </p>
          </li>
        </ul>
      </header>
    </>
  );
};
export default Header;
