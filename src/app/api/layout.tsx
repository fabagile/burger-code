import Header from "@/components/layout/Header";
import React, { ReactNode } from "react";

const ApiLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="container admin">{children}</div>
    </>
  );
};

export default ApiLayout;
