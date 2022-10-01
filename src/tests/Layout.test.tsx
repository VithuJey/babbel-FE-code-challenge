import React from "react";
import { create } from "react-test-renderer";
import { Layout } from "../components";

describe("Layout component", () => {
  test("Matches the snapshot", () => {
    const layout = create(
      <Layout>
        <div></div>
      </Layout>
    );
    expect(layout.toJSON()).toMatchSnapshot();
  });
});
