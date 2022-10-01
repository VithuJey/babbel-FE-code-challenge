import React from "react";

import "./card.scss";

type CardProps = {
  name: string;
  imageUrl: string;
  score: string;
};

export default function Card({
  name,
  imageUrl,
  score,
}: CardProps): JSX.Element {
  return (
    <div className="card">
      <p className="name">{name}</p>
      <img src={imageUrl} alt="avatar" />
      <p className="score">Score: {score}</p>
      <button>Roll</button>
    </div>
  );
}
