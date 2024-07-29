import React, { ReactNode } from 'react'
import Button from '../actions/Button'

const Actions = ({children}: {children: ReactNode}) => {
  return (
    <div className="btn-group">
        {children}
        {/* <Button onClick={()=> {}} >Appuyer</Button> */}
    </div>
  )
}

export default Actions