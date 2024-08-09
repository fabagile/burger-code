import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/navbar/Navigation";
import React, { ReactNode } from "react";

const ProdLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container site">
      <Header />
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default ProdLayout;
