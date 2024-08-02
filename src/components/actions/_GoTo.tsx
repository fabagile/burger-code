'use client'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { FaPlus } from 'react-icons/fa6'
import Button from './_Button'
import { useRouter } from 'next/navigation'


type GotoType = {
    children: ReactNode
    url: string, color:string, title: string
}
const GoTo = ({children, url, color, title}: GotoType) => {
    
  const router = useRouter();
  return (
    <Button title={title} onClick={()=>router.push(url)} btnColor={color} className='btn btn-success' >
        {children}

        {/* <FaPlus title="ajouter un produit"  /> */}
    </Button>
  )
}

export default GoTo