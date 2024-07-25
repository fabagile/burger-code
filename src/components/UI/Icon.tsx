import React from 'react'

const Icon = ({name}) => {
  return (
    <span className={`glyphicon glyphicon-${name}`} />
  )
}

export default Icon