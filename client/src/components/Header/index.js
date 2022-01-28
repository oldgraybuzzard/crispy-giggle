import React, { useState } from 'react';
import Modal from '../Modal';
import Button from '../FormElements/Button';
import EmployerSignup from '../../pages/EmployerSignup';

function Header(props) {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);
  return (
    <>
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeModalHandler}>CLOSE</Button>}
      >
        <div className="formRender-container">
          <EmployerSignup />
        </div>
      </Modal>
      <header className="flex-row px-1 header-style">
        <h2> Crispy Gigglers</h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <p onClick={openModalHandler}> Signup Form </p>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
