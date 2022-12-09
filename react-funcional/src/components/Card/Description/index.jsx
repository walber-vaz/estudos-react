import React from 'react'

import PropTypes from 'prop-types'

const Description = (props) => {
  const { description } = props

  return (
    <p>{description}</p>
  )
}

Description.defaultProps = {
  description: "Nenhuma descrição encontrada",
}

Description.propTypes = {
  description: PropTypes.string,
}

export default Description
