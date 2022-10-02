import React from "react";
import { ModalProps } from "../../types/component.type";
import Confetti from "react-confetti";

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
      <Confetti width={4000} height={4000} numberOfPieces={1000} wind={0.03} />

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
          Play again
        </button>
      </div>
    </div>
  );
}
