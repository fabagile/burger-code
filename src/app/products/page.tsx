"use client";

import { useEffect } from "react";

import List from "@/components/products/List";
import { productsStore } from "@/store";

import Detail from "@/components/products/Detail";
import Icon from "@/components/UI/Icon";
import { toLocalCurrency } from "@/utils/transform";

export default function Home() {
  const {getProduct, reset, cart, order, total } = productsStore();
  useEffect(() => console.table(cart), [cart]);
  return getProduct !== null ? (
    <>
      <div className="card">
        <div className="btn-group">
          <button onClick={reset} className="btn btn-primary">
            <Icon name="list" />
          </button>
          <button onClick={order} className="btn btn-secondary">
            <Icon name="x" />
          </button>
        </div>
        Panier : {cart.length}
      </div>

      <Detail key={getProduct.id} {...getProduct} />
    </>
  ) : (
    <>
      <div className="card">
        <p>Panier : {cart.length}</p>
        <p>{toLocalCurrency(total)}</p>
      </div>
      <List />
    </>
  );
}
