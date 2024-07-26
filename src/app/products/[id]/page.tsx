'use client'

import Detail from "@/components/products/Detail";
import { productsStore } from "@/store";
import { useRouter } from "next/router";

import React, { useEffect, useMemo } from 'react'


const ProductPage = ({params}) => {
    
    const {products} = productsStore()
    const item = products[params.id]
    // const router=useRouter()

    // useEffect(() => router.query.id, [router.query.id])
    // const id = useMemo(()=> router.query.id, [router.query.id])
    
  return (
    <Detail {...item} />
  )
}

export default ProductPage