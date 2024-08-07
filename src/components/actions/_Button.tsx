"use client";

import Link from "next/link";
import React, { MouseEventHandler, ReactNode, useMemo } from "react";

type BtnType = {
  textColor?: string;
  btnColor?: string;
  size?: string;
  title?: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
  url?: string;
};

const Button = ({
  textColor,
  btnColor = "white",
  size = "base",
  onClick,
  title = "ajouter au panier",
  children,
  url,
}: BtnType) => {
  const className = `py-2.5 px-6 rounded-lg text-${size} font-medium bg-${btnColor} text-${textColor}`;
  // const btnClass = useMemo(
  //   () =>
  //     outline
  //       ? `btn btn-${size} btn-outline-${
  //           textColor ? `${textColor} bg-${btnColor}` : btnColor
  //         }`
  //       : `btn btn-${size} btn-${btnColor}`,
  //   [size, textColor, btnColor, outline]
  // );
  //   const btnClass=useMemo(()=> (`btn btn-md btn${outline? "-outline" :"" }-${!textColor.length ?btnColor:textColor} ${textColor.length? ():() }  `),[size, textColor, btnColor, outline])
  return url ? (
    <Link
      href={url}
      type="button"
      onClick={onClick}
      className={className}
      title={title}
    >
      {children}
    </Link>
  ) : (
    <button type="button" onClick={onClick} className={className} title={title}>
      {children}
    </button>
  );
};

export default Button;
