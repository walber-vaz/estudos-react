import React from 'react'

import PropTypes from 'prop-types'

const Img = (props) => {
  const { url } = props

  return (
    <img src={url} alt={url} />
  )
}

Img.propTypes = {
  url: PropTypes.string,
}

export default Img
