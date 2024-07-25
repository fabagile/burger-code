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
  cart: Item[];
  total: number;
  select: (itemId: string) => void;
  resetItem: () => void;
  addToCart: (itemId: string) => void;
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
