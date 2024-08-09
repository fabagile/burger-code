"use client";

import { useMemo } from "react";

import { productsStore } from "@/store";
import Dish from "./Dish";
import { useShallow } from "zustand/react/shallow";


export default function List() {
  const { products, category } = productsStore(
    useShallow((s) => ({
      products: s.products,
      getProduct: s.getProduct,
      category: s.category
    }))
  );
  // console.log(category)
  const currentList = useMemo(() => products, [products]);
  return (
    <div id={category.name} className="row">
      {currentList.map((item, index) => (
        <Dish key={index} index={index} item={item} />
      ))}
    </div>
  );
}
