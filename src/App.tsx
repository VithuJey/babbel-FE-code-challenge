import React from "react";
import { Card, Layout } from "./components";

const players = [
  {
    name: "Player 1",
    id: "9claxn7lpl",
    imageUrl: "http://localhost:8000/1.png",
  },
  {
    name: "Player 2",
    id: "mwfdqeww4i",
    imageUrl: "http://localhost:8000/2.png",
  },
  {
    name: "Player 2",
    id: "mwfdqeww4i",
    imageUrl: "http://localhost:8000/2.png",
  },
  {
    name: "Player 2",
    id: "mwfdqeww4i",
    imageUrl: "http://localhost:8000/2.png",
  },
];

export default function App(): JSX.Element {
  return (
    <Layout>
      <div>
        <div className="matchId">
          <p>Match ID: 123</p>
        </div>
        <div className="title">
          <h1>Dice Wise</h1>
        </div>
        <div className="target">
          <p>Score to win:</p>
        </div>
        <div className="cards">
          {players.map(player => (
            <Card name={player.name} imageUrl={player.imageUrl} score={"0"} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
