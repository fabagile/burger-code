"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const Header = () => {
  const router = useRouter();
  return (
    <h1 onClick={() => router.push("/products")} className="text-logo">
      <div className="d-flex justify-content-center gap-3">
        <CiForkAndKnife />
        <span>Burger Code</span>
        <CiForkAndKnife />
      </div>
    </h1>
  );
};

export default Header;
