'use client'

import Dish from '@/components/products/Dish'
import { productsStore } from '@/store'
import categories from '@/data/categories.json'
import React, { ReactNode, useEffect, useMemo } from 'react'

type thisNode = {
  params: {name:string, id:string}
}

const Category = ({params}:thisNode) => {
  // const categoryItems = useMemo(()=> products.filter(p=>p.category==category), [category])
  const {products, filterProducts} = productsStore()
  const item = categories[params.name]
  const categoryProducts = products.filter(p=> p.category===item)
  return (
    <div className='card'>
      {JSON.stringify (products)}
    </div>
  )
}

export default Category
