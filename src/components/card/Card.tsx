import React from "react";
import { CardProps } from "../../types/component.type";

import "./card.scss";

const getButtonText = (
  currentPlayerId: string | null,
  playerId: string
): string =>
  currentPlayerId == null
    ? "Game end"
    : playerId !== currentPlayerId
    ? "Wait"
    : "Roll";

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
        {getButtonText(currentPlayerId, player.id)}
      </button>
    </div>
  );
}
