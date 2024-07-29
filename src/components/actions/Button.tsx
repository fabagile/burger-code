"use client";

import React, { MouseEventHandler, ReactNode, useMemo } from "react";
import Icon from "../UI/Icon";
type BtnType = {
  textColor?:string
btnColor?:string
size?:string
iconName?:string
outline?:boolean
title?:string
className?:string
children: ReactNode
onClick?:MouseEventHandler
}

const Button = ({
  textColor,
  btnColor = "default",
  size = "md",
  iconName,
  onClick,
  outline = false,
  title = "ajouter au panier",
className="",
  children
}: BtnType) => {
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
    <button onClick={onClick} className={`btnClass ${className}`} title={title}>
      {children}
      {/* <Icon name={iconName} /> */}
    </button>
  );
};

export default Button;
