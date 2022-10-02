import React from "react";
import { CardProps } from "../../types/component.type";

import "./card.scss";

export default function Card({
  index,
  player,
  score,
  currentPlayerId,
  roll,
}: CardProps): JSX.Element {
  return (
    <div className="card">
      <p className="name">{player.name}</p>
      <img src={player.imageUrl} alt="avatar" />
      <p className="score">Score: {score}</p>
      <button
        onClick={() => roll(index)}
        disabled={player.id !== currentPlayerId}
      >
        {currentPlayerId == null
          ? "Dice down"
          : player.id !== currentPlayerId
          ? "Wait"
          : "Roll"}
      </button>
    </div>
  );
}
