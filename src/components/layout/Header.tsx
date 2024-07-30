'use client'

import { useRouter } from "next/navigation";
import React from "react";
// import Icon from "../UI/Icon";

const Header = () => {
  const Logo = ()=><i className="fa-solid fa-utensils"></i>
  const router = useRouter()
  return (
    <h1 onClick={()=>router.push('/products')} className="text-logo">
      <Logo  />
      <span className="px-4">Burger Code</span>
      <Logo />
    </h1>
  );
};

export default Header;
