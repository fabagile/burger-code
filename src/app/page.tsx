"use client";

import { useEffect } from "react";

import List from "@/components/products/List";
import { productsStore } from "@/store";

import Detail from "@/components/products/Detail";
import Icon from "@/components/UI/Icon";

export default function Home() {
  const {getProduct, resetProduct, cart, order, total } = productsStore();
  useEffect(() => console.table(cart), [cart]);
  return getProduct !== null ? (
    <>
      <div className="card">
        <div className="btn-group">
          <button onClick={resetProduct} className="btn btn-success">
            <Icon name="floppy-remove" />
          </button>
          <button onClick={order} className="btn btn-link">
            <Icon name="check" />
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
        <p>{total.toFixed(2)} €</p>
      </div>
      <List />
    </>
  );
}
