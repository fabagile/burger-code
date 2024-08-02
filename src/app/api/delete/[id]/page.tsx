'use client'

import { productsStore } from '@/store'
import React from 'react'

// type CompType = {
//   params: 
// } 

const DeleteApiProduct = ({params}) => {
    const {all} = productsStore()
    const item = all[params.id]
    
    // const 
  return (
    <>
    {/* <div>{item.name}</div> */}
    <div className="row">
      <h1>
        <strong>Supprimer {item.name}</strong>
      </h1>
      <br />
      <form className="form" action="delete.php" role="form" method="post">
        <input type="hidden" name="id" value="<?php echo $id;?>" />
        <p className="alert alert-warning">
          Etes-vous sur de vouloir supprimer ?
        </p>
        <div className="form-actions">
          <button type="submit" className="btn btn-warning">
            Oui
          </button>
          <a className="btn btn-default" href="index.php">
            Non
          </a>
        </div>
      </form>
    </div>
    </>
  )
}

export default DeleteApiProduct