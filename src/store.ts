import { create } from "zustand";
import productsData from "@/data/products.json";
import categories from "@/data/categories.json"
import newProducts from "@/data/newProducts.json"

const menus = productsData.filter(({category})=> category=="1")

export const newCategories = newProducts.reduce((names, p)=> (!names.includes(p.category)?(names.concat(p.category)):(names)), [])

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};
type Category = {id: string, name: string}
type Store = {
  products: Product[];
  all:Product[]
  getProduct: null | Product;
  cart: Product[];
  total: number;
  // category: string;
  filterProducts: (id: string) => void;
  categoryItems: Product[];
  select: (productId: string) => void;
  reset: () => void;
  addToCart: (productId: string) => void;
  order: () => void;
  categories: Category[]; category: Category

};

// import { MouseEventHandler } from "react";

export const productsStore = create<Store>((set, get) => ({
  products: menus,
  all: productsData,
  getProduct: null,
  categories,
  category: categories[0],
  filterProducts: (id)=> {
    const newCat = get().categories.find(cat=> cat.id==id)
    console.log(newCat)
      set({
        category: newCat,
        products: get().all.filter(item => item.category === newCat.id)
      })
      // console.log(get().products)
    },
  categoryItems: [],
  select: (productId) => {
    const newProduct = get().all.find((product) => product.category == productId);
    // console.log(newProduct);
    // console.log(category)
    set({
      getProduct: newProduct,
    });
  },
  reset: () => {
    set({ products: menus });
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
  order: () => {
    set({
      cart: [],
      total: 0
    })
  }
}));
