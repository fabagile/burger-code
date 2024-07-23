import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Link href="https://github.com/fabagile/burger-code" target="_blank">
        <i className="fa-brands fa-fw fa-square-github fa-2xl"></i>
        <span> voir le code source</span>
      </Link>
    </footer>
  );
};

export default Footer;
