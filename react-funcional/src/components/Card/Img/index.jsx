import React from 'react'

import PropTypes from 'prop-types'

const msgError = "Nenhuma imagem ou url encontrada"
const urlImg = "https://via.placeholder.com/150"

const Img = (props) => {
  const { url } = props

  return (
    url === msgError
      ? <img src={urlImg} alt="150" />
      : <img src={url} alt={url} />
  )
}

Img.defaultProps = {
  url: msgError,
}

Img.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Img
