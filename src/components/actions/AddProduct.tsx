'use client'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import Button from './_Button'
import { useRouter } from 'next/navigation'

const AddProduct = () => {
    
  const router = useRouter();
  return (
    <Button onClick={()=>router.push('/api/insert')} className='btn btn-success' >

        <FaPlus title="ajouter un produit"  />
    </Button>
  )
}

export default AddProduct