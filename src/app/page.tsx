'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/components/layout/navbar/Navigation";
import Dish from "@/components/items/Dish";
import List from "@/components/items/List";
import { itemsStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
// import { useEffect } from "react";
import Detail from "@/components/items/Detail";

export default function Home() {
  const { items, getItem, resetItem } = itemsStore(
    useShallow((s) => ({
      items: s.items,
      getItem: s.getItem,
      resetItem: s.resetItem,
    }))
  );
  // useEffect(() => console.log(items), [items]);
  return getItem !== null ? (<>
  <button onClick={resetItem} className="btn btn-success"><span className="glyphicon glyphicon-floppy-remove" /></button>
    <Detail key={getItem.id} {...getItem} />
  </>
  ) : (<List />
    
  );

}
