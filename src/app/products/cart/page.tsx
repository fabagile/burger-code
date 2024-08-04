'use client'

import Button from '@/components/actions/_Button'
import BackHome from '@/components/actions/Back'
import { productsStore } from '@/store'
import { converToLocalCurrency } from '@/utils/transform'
import { useRouter } from 'next/navigation'
import React from 'react'

const Cart = () => {
    const {cart, order} = productsStore()
    const router = useRouter()
  return (<div className='card'><ul>{
cart.map(item=> <li key={item.id}>{item.name} {converToLocalCurrency(item.price)}</li>)
  }</ul>
  <BackHome />
    {/* <code>

        {JSON.stringify(cart)}
    </code> */}
  </div>
  )
}

export default Cart