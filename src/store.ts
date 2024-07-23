import { create } from "zustand";

type Item = {
    id: string,
name: string,
description: string,
price: string,
image: string,
category: string,
}
type Store = {
    items: Item[]
}

import items from "./data/items.json"

export const itemsStore = create<Store>((set, get) => ({
    items: items
}))