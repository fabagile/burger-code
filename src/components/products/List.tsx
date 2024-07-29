"use client";

import { useEffect, useMemo } from "react";

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
  const currentList = useMemo(() => products, [products]);
  return (
    <div className="row">
      {currentList.map((i) => (
        <Dish key={i.id} {...i} />
      ))}
    </div>
  );
}
