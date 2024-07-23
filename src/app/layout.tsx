import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles.scss";

import Navigation from "@/components/layout/navbar/Navigation";
import CustomHead from "@/components/layout/CustomHead"
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burger Code",
  description: "Commandez vos burgers préférés",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <CustomHead />
      <body>
        <div className="container site">
          <h1 className="text-logo">
            <span className="glyphicon glyphicon-cutlery"></span> Burger Code{" "}
            <span className="glyphicon glyphicon-cutlery"></span>
          </h1>
        <Navigation />
        <div>

        {children}
        </div>
        </div>
        <Footer />

      </body>
    </html>
  );
}
