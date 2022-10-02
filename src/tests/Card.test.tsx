import React from "react";
import { create } from "react-test-renderer";
import { Card } from "../components";

const player = {
  id: "12345",
  name: "Player 1",
  imageUrl: "../../public/1.png",
};

describe("Card component", () => {
  test("Matches the snapshot", () => {
    const card = create(
      <Card
        index={0}
        player={player}
        score={10}
        currentPlayerId={null}
        roll={() => {}}
      />
    );
    expect(card.toJSON()).toMatchSnapshot();
  });

  test("Card button text when `currentPlayerId` is same as player.id", () => {
    // currentPlayerId is player.id
    const currentPlayerId = player.id;
    const card = create(
      <Card
        index={0}
        player={player}
        score={10}
        currentPlayerId={currentPlayerId}
        roll={() => {}}
      />
    );

    const cardInstance = card.root;
    const childElement = cardInstance.findByType("button");
    console.log(childElement.props);
    expect(childElement.props.children).toEqual("Roll");
  });

  test("Card button text when `currentPlayerId` is different from player.id", () => {
    // currentPlayerId is not player.id
    const currentPlayerId = "090876";
    const card = create(
      <Card
        index={0}
        player={player}
        score={10}
        currentPlayerId={currentPlayerId}
        roll={() => {}}
      />
    );

    const cardInstance = card.root;
    const childElement = cardInstance.findByType("button");
    console.log(childElement.props);
    expect(childElement.props.children).toEqual("Wait");
  });

  test("Card button text when `currentPlayerId` is null. `currentPlayerId` is null when winner is found.", () => {
    // currentPlayerId is null
    const currentPlayerId = null;
    const card = create(
      <Card
        index={0}
        player={player}
        score={10}
        currentPlayerId={currentPlayerId}
        roll={() => {}}
      />
    );

    const cardInstance = card.root;
    const childElement = cardInstance.findByType("button");
    console.log(childElement.props);
    expect(childElement.props.children).toEqual("Dice down");
  });
});
