import React, { useEffect, useState } from "react";
import { API_METHODS } from "./api/methods";
import { Card, Layout, Modal } from "./components";
import { GameDetailsType, PlayerType } from "./types/data.type";

// get random number between 1 to 6
const getDiceNum = () => Math.floor(Math.random() * 6) + 1;

// call API to post winnerId, matchId
const postWinner = async (winnerId: string, matchId: string) => {
  try {
    const res = await API_METHODS.gameDetails.post(matchId, winnerId);
    console.log("POST postWinner success => " + res);
  } catch (err) {
    console.log("POST postWinner error => " + err);
  }
};

export default function App(): JSX.Element {
  const [gameDetails, setGameDetails] = useState<GameDetailsType>();
  const [scores, setScores] = useState<Array<number>>();
  const [currentPlayerId, setCurrentPlayerId] = useState<string | null>(null);
  const [winner, setWinner] = useState<PlayerType>();
  const [showModal, setShowModal] = useState<boolean>(false);

  // call API to get game details
  const getGameDetails = async () => {
    try {
      const data = await API_METHODS.gameDetails.get();
      setGameDetails(data);
      setScores(Array(data.players.length).fill(0));
      setCurrentPlayerId(data.players[0].id);
    } catch (err) {
      console.log("GET gameDetails error => " + err);
    }
  };

  // get the data on mount
  useEffect(() => {
    getGameDetails();
  }, []);

  // handle dice roll
  const rollDice = (index: number) => {
    if (!gameDetails || !scores || !currentPlayerId) return;

    let rolledNum = getDiceNum();
    // calculate the new score
    let newScore = scores[index] + rolledNum;

    setScores((prevScores: Array<number> | undefined) => {
      if (!prevScores) return;
      prevScores[index] = newScore;
      return [...prevScores];
    });

    // if the newScore is >= to scoreToWin assign the winner by setWinner
    if (newScore >= gameDetails.scoreToWin) {
      // find the winning curent player object and set to winner
      const currentPlayer = gameDetails.players.find(
        (player: PlayerType) => player.id === currentPlayerId
      );
      !!currentPlayer && setWinner(currentPlayer);
      postWinner(currentPlayerId, gameDetails?.matchId);
      // set currentPlayerId to emplty string if the winner is found
      setCurrentPlayerId(null);
      setShowModal(true);
    } else {
      // update the currentPlayerId to next player's id
      let players = gameDetails?.players;
      let nextPlayerIndex = index == players.length - 1 ? 0 : index + 1;
      setCurrentPlayerId(players[nextPlayerIndex].id);
    }
  };

  // if game details API not working
  if (!gameDetails || !scores)
    return (
      <div className="div-center">
        <h1>Get ready to play!</h1>
      </div>
    );

  return (
    <Layout>
      <div>
        <div className="matchId">
          <p>
            Match ID: <span>{gameDetails.matchId}</span>
          </p>
        </div>
        <div className="title">
          <h1>DICE WISE</h1>
        </div>
        <div className="target">
          <p>
            Score to win: <span>{gameDetails.scoreToWin}</span>
          </p>
        </div>
        <div className="cards-wrapper">
          {gameDetails?.players.map((player, index) => (
            <Card
              key={player.id}
              index={index}
              player={player}
              score={scores[index]}
              currentPlayerId={currentPlayerId}
              roll={rollDice}
            />
          ))}
        </div>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          winner={winner}
          getGameDetails={getGameDetails}
        />
      </div>
    </Layout>
  );
}
