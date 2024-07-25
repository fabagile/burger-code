'use client'

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/components/layout/navbar/Navigation";
import Dish from "@/components/items/Dish";
import List from "@/components/items/List";
import { itemsStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import Detail from "@/components/items/Detail";
import Icon from "@/components/UI/Icon";

export default function Home() {
  const { items, getItem, resetItem, cart, order, total } = itemsStore(
  );
  useEffect(() => console.table(cart), [cart]);
  return getItem !== null ? (<>
  
  <div className="card">
    <div className="btn-group">

  <button onClick={resetItem} className="btn btn-success">
  <Icon name="floppy-remove" />
  </button>
  <button onClick={order} className="btn btn-link"><Icon name="check" /></button>
    </div>
  Panier : {cart.length}


  </div>
  
    <Detail key={getItem.id} {...getItem} />
  </>
  ) : (<>
  <div className="card"><p>

  Panier : {cart.length}
  </p>
  <p>{total.toFixed(2)} €</p>

  </div>
  <List />
  </>
    
  );

}
