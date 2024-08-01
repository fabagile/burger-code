"use client";

import React from "react";
import Button from "./_Button";
import { useRouter } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";
import { productsStore } from "@/store";

const ShowCart = () => {
  const { cart } = productsStore();
  const router = useRouter();
  return (
    <Button
      btnColor="info"
      size="lg"
      onClick={() => router.push("/products/cart")}
      title="voir le panier"
      className="position-relative"
    >
      <FaCartShopping />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-light">
        {cart.length}

        <span className="visually-hidden">produits ajoutés</span>
      </span>
    </Button>
  );
};

export default ShowCart;
