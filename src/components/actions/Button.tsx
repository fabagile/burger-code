"use client";

import React, { useMemo } from "react";
import Icon from "../UI/Icon";

const Button = ({
  textColor,
  btnColor = "default",
  size = "md",
  iconName,
  onClick,
  outline = false,
}) => {
  const btnClass = useMemo(
    () =>
      outline
        ? `btn btn-${size} btn-outline-${
            textColor ? `${textColor} bg-${btnColor}` : btnColor
          }`
        : `btn btn-${size} btn-${btnColor}`,
    [size, textColor, btnColor, outline]
  );
  //   const btnClass=useMemo(()=> (`btn btn-md btn${outline? "-outline" :"" }-${!textColor.length ?btnColor:textColor} ${textColor.length? ():() }  `),[size, textColor, btnColor, outline])
  return (
    <button onClick={onClick} className={btnClass} title="ajouter au panier">
      <Icon name={iconName} />
    </button>
  );
};

export default Button;
