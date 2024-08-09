'use client'

import { productsStore } from '@/store'
import React from 'react'

const CategoryName = ({params}) => {
    const { categories} = productsStore()
    const {id} = categories[params.id]
  return (
    <code>{id}</code>
  )
}

export default CategoryName