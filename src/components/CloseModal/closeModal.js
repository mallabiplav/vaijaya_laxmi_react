import React from "react";
import "./closeModal.css";

const CloseModal = ({ closeButton }) => {
  return (
    <div className="close-modal-box" onClick={() => closeButton(false)}>
      <span className="close-modal-button"></span>
    </div>
  );
};

export default CloseModal;
