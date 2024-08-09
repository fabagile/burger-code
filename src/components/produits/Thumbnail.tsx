import { converToLocalCurrency } from '@/utils/transform'
import React from 'react'

const Thumbnail = ({image, name, price}) => {
  return (
    <>
    <img src={`/images/${image}`} alt={`${name}`} />
        <div className="price">{converToLocalCurrency(price)}</div>
        </>
  )
}

export default Thumbnail