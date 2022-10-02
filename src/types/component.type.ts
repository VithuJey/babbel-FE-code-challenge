import React from "react";
import { PlayerType } from "./data.type";

export type CardProps = {
  index: number;
  player: PlayerType;
  score: number;
  roll: (index: number) => void;
  currentPlayerId: string | null;
};

export type LayoutProps = {
  children: JSX.Element;
};

export type ModalProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  winner: PlayerType | undefined;
  getGameDetails: () => Promise<void>;
};
