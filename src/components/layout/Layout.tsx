import React from "react";

import "./layout.scss";

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="container">
      <div>{children}</div>
    </div>
  );
}
