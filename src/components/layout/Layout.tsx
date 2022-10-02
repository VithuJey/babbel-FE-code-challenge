import React from "react";
import { LayoutProps } from "../../types/component.type";

import "./layout.scss";

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="container">
      <div>{children}</div>
    </div>
  );
}
