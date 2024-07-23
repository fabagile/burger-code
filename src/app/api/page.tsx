import React from 'react'

import data from "./data.json"

const ApiPage = () => {
  return (
    <div>
      {JSON.stringify(data,null, 2 )}
    </div>
  )
}

export default ApiPage
