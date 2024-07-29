'use client'

import { productsStore } from '@/store'
import React from 'react'
import categoriesData from "@/data/categories.json"

const Categories = () => {
  const {products} = productsStore()
  const categories = categoriesData.map(cat=> cat.name)
  // const newproductsData = products.map(p=> ())
  // const categoryItems = products.
  return (
    <div className='card'>
      {categories.join(", ")}
    </div>
  )
}

export default Categories
