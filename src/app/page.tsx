"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

import List from "@/components/products/List";
import { productsStore } from "@/store";

import Detail from "@/components/products/Detail";
import Icon from "@/components/UI/Icon";
import { toLocalCurrency } from "@/utils/transform";

export default function Home() {
  const {getProduct, resetProduct, cart, order, total } = productsStore();
  useEffect(() => console.table(cart), [cart]);
  redirect('/categories/menus/')
}
