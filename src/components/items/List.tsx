'use client'

import { useEffect } from "react"
import items from "@/data/items.json"
// import { it } from "node:test"

import {itemsStore} from "@/store"
import Dish from "./Dish"
import { useShallow } from "zustand/react/shallow"


export default function List () {
    const {items, getItem} = itemsStore(useShallow(s=>({
        items:s.items, 
        getItem:s.getItem, 

    })))
    useEffect(()=> console.log(items),[items])
    
    return (<>
    {null ||getItem}
    <div className="row">{items.map(i=><Dish key={i.id} {...i} />)}</div>
    </>)
}