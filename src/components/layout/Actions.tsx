'use client'

import React, { ReactNode } from 'react'
import Button from '../actions/Button'
type BtnGroupType = {children: ReactNode, btnSize?: string}



const Actions = ({children, btnSize}: BtnGroupType) => {
  // const groupClass =
  return (
    <div className={btnSize && `btn-group-${btnSize}`}>
        {children}
        {/* <Button onClick={()=> {}} >Appuyer</Button> */}
    </div>
  )
}

export default Actions