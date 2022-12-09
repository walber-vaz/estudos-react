import React from 'react'

import PropTypes from 'prop-types'

const Img = (props) => {
  const { url } = props

  return (
    <img src={url} alt={url} />
  )
}

Img.defaultProps = {
  url: "Nenhuma imagem ou url encontrada",
}

Img.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Img
