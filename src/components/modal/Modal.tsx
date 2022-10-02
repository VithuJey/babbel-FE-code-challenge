import React from "react";
import { ModalProps } from "../../types/component.type";
import "./modal.scss";

export default function Modal({
  showModal,
  setShowModal,
  winner,
  getGameDetails,
}: ModalProps) {
  const modalStyle = showModal ? "modal-block" : "modal-none";

  return (
    <div className={modalStyle}>
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            setShowModal(false);
          }}
        >
          &times;
        </span>
        <h2>We got a winner!</h2>
        <img src={winner?.imageUrl} alt="avatar" />
        <p className="name">{winner?.name}</p>

        <button
          onClick={async () => {
            await getGameDetails();
            setShowModal(false);
          }}
        >
          Roll again
        </button>
      </div>
    </div>
  );
}
