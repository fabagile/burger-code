"use client";

import { useEffect } from "react";

import { productsStore } from "@/store";
import Dish from "./Dish";
import { useShallow } from "zustand/react/shallow";
import Card from "../UI/Card";

export default function List() {
  const { products} = productsStore(
    useShallow((s) => ({
      products: s.products,
      getProduct: s.getProduct,
    }))
  );
  useEffect(() => console.log(products), [products]);
  return (
    <div className="row">
      {products.map((i) => (
        <Dish key={i.id} {...i} />
      ))}
    </div>
  );
}
