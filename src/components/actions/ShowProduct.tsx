import React from 'react'
import Button from "@/components/actions/_Button"
import { useRouter } from 'next/navigation'
import { FaEye } from 'react-icons/fa6'

const ShowProduct = ({ id }) => {
  const router = useRouter()
  return (
    <Button title="Voir le produit" onClick={() => router.push(`/produits/${id}`)} >
      <FaEye />
    </Button>
  )
}

export default ShowProduct