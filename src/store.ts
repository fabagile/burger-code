import { create } from "zustand";
import products from "./data/products.json";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};
type Store = {
  products: Product[];
  getProduct: null | Product;
  cart: Product[];
  total: number;
  select: (productId: string) => void;
  resetProduct: () => void;
  addToCart: (productId: string) => void;
  order: ()=> void;

};

import { MouseEventHandler } from "react";

export const productsStore = create<Store>((set, get) => ({
  products: products,
  getProduct: null,
  select: (productId) => {
    const newProduct = get().products.find((product) => product.id == productId);
    console.log(newProduct);
    set({
      getProduct: newProduct,
    });
  },
  resetProduct: () => {
    set({ getProduct: null });
  },
  cart: [],
  addToCart: (productId) => {
    const newProduct = get().products.find((product) => product.id == productId);
    set({
      cart: [newProduct, ...get().cart],
      total: get().total + newProduct.price,
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
