import React from "react";
import { create } from "react-test-renderer";
import { Card } from "../components";

describe("Card component", () => {
  test("Matches the snapshot", () => {
    const card = create(
      <Card name="Sam" imageUrl="../../public/1.png" score="0" />
    );
    expect(card.toJSON()).toMatchSnapshot();
  });
});
