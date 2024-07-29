import React from "react";
import Icon from "../UI/Icon";

const Header = () => {
  const Logo = ()=><i className="fa-solid fa-utensils"></i>
  return (
    <h1 className="text-logo">
      <Logo  />
      <span className="px-4">Burger Code</span>
      <Logo />
    </h1>
  );
};

export default Header;
