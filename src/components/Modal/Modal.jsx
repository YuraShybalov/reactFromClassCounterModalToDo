import React from 'react';

// import css from './Modal.module.css';

const Modal = ({ children, closeModal }) => {
  return (
    <div>
      <h1>modal</h1>
      <button onClick={closeModal}>Close</button>
      {children}
    </div>
  );
};

export default Modal;
