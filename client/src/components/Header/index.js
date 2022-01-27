import React, { useState } from 'react';
import Modal from '../Modal';
import Button from '../Button';

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
        <div className="form-container">
          <h2>Test Form!</h2>
        </div>
      </Modal>
      <header>
        <h2> Crispy Gigglers</h2>
        <nav>
          <ul>
            <li>
              <p onClick={openModalHandler}> Signup Form </p>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
