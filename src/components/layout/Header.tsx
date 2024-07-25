import React from "react";
import Icon from "../UI/Icon";

const Header = () => {
  return (
    <h1 className="text-logo">
      <Icon name="cutlery" />
      <span className="px-3">Burger Code</span>
      <Icon name="cutlery" />
    </h1>
  );
};

export default Header;
