import { create } from "zustand";

type Item = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
};
type Store = {
  items: Item[];
  getItem: null | Item;
  select: (itemId: string) => void;
  resetItem: () => void;
  cart: Item[];
  addToCart: (itemId: string) => void;
  total: number;
  order: ()=> void;

};

import items from "./data/items.json";
import { MouseEventHandler } from "react";

export const itemsStore = create<Store>((set, get) => ({
  items: items,
  getItem: null,
  select: (itemId) => {
    const newItem = get().items.find((item) => item.id == itemId);
    console.log(newItem);
    set({
      getItem: newItem,
    });
  },
  resetItem: () => {
    set({ getItem: null });
  },
  cart: [],
  addToCart: (itemId) => {
    const newItem = get().items.find((item) => item.id == itemId);
    set({
      cart: [newItem, ...get().cart],
      total: get().total + parseFloat(newItem.price),
    });
  },
  total: 0,
  order: ()=> {
    set({
        cart: [],
        total: 0
    })
  }
}));
