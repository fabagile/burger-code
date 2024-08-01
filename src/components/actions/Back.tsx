"use client";

import React from "react";

import { FaArrowLeft, FaHouse, } from "react-icons/fa6";

import Button from "./_Button";
import { useRouter } from "next/navigation";

const BackHome = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/products")}
      size="lg"
      btnColor="info"
      title="Retour à l'accueil"
    >
      <FaHouse />
      {/* <FaArrowLeft /> */}
      
    </Button>
  );
};

export default BackHome;
