import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.scss"
import "@/styles/main.scss";

import Navigation from "@/components/layout/navbar/Navigation";
// import CustomHead from "@/components/layout/CustomHead";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/UI/Icon";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burger Code",
  description: "Commandez vos burgers préférés"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* <meta charSet="utf-8" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script
          src="https://kit.fontawesome.com/a54ea23ea6.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

        <link
          href="http://fonts.googleapis.com/css?family=Holtwood+One+SC"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>{children}
        {/* <div className="container site">
          <Header />
          <Navigation />
          <div>{children}</div>
        </div>
        <Footer /> */}
      </body>
    </html>
  );
}
