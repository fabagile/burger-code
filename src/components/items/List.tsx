'use client'

import { useEffect } from "react"
import items from "@/data/items.json"
// import { it } from "node:test"

import {itemsStore} from "@/store"
import Dish from "./Dish"


export default function List () {
    const items = itemsStore(s=>s.items)
    useEffect(()=> console.log(items),[items])
    
    return (<div className="row">{items.map(item=><Dish key={item.id} {...item} />)}</div>)
}