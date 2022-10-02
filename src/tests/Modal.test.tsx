import React, { useState } from "react";
import { create } from "react-test-renderer";
import { Modal } from "../components";

describe("Modal component", () => {
  test("Matches the snapshot", () => {
    const modal = create(
      <Modal
        showModal={true}
        setShowModal={() => {}}
        winner={{
          id: "12345",
          name: "Player 1",
          imageUrl: "../../public/1.png",
        }}
        getGameDetails={async () => {}}
      />
    );
    expect(modal.toJSON()).toMatchSnapshot();
  });

  test("Modal renders player name", () => {
    const playerName = "Player 1";
    const modal = create(
      <Modal
        showModal={true}
        setShowModal={() => {}}
        winner={{
          id: "12345",
          name: playerName,
          imageUrl: "../../public/1.png",
        }}
        getGameDetails={async () => {}}
      />
    );
    const modalInstance = modal.root;
    expect(modalInstance.findByProps({ className: "name" }).children).toEqual([
      playerName,
    ]);
  });

  test("Modal is opened", () => {
    const modal = create(
      <Modal
        showModal={true}
        setShowModal={() => {}}
        winner={{
          id: "12345",
          name: "Player 1",
          imageUrl: "../../public/1.png",
        }}
        getGameDetails={async () => {}}
      />
    );

    const modalInstance = modal.root;
    const childElement = modalInstance.findByType("div");
    expect(childElement.props.className).toEqual("modal-block");
  });

  test("Modal is closed", () => {
    const modal = create(
      <Modal
        showModal={false}
        setShowModal={() => {}}
        winner={{
          id: "12345",
          name: "Player 1",
          imageUrl: "../../public/1.png",
        }}
        getGameDetails={async () => {}}
      />
    );

    const modalInstance = modal.root;
    const childElement = modalInstance.findByType("div");
    expect(childElement.props.className).toEqual("modal-none");
  });
});
