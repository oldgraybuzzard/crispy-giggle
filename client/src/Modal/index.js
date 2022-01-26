import React from 'react';

function Modal({ onClose, currentForm }) {
  const { title } = currentForm;
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{title}</h3>
        <button onClick={onClose} type="button">
          Close Modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
