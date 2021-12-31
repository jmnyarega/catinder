import React, { ReactNode } from "react";

// third party libs
import { Layout as LayoutA } from "antd";

// components
import Header from "./header";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <LayoutA style={{ background: "white" }}>
    <Header />
    {children}
  </LayoutA>
);

export default Layout;
