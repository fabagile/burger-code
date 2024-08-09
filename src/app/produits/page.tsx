"use client";

import { useEffect } from "react";


import { productsStore, newCategories } from "@/store";
import List from "@/components/products/List";

// import Detail from "@/components/produits/Detail";
// import Icon from "@/components/UI/Icon";
// import { toLocalCurrency } from "@/utils/transform";

export default function Home() {
  const {getProduct, reset, cart, order, total } = productsStore();
  console.log(newCategories)
  // useEffect(() => console.table(cart), [cart]);
  return  (
    <>
      
      <List />
    </>
  );
}
