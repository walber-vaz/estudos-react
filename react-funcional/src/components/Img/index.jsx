import React from 'react'

const Img = (props) => {
  const { url } = props

  return (
    <img src={url} alt={url} />
  )
}

export default Img
