import React from 'react'

import PropTypes from 'prop-types'

const Title = (props) => {
  const { title } = props

  return (
    <h1>{title}</h1>
  )
}

Title.propTypes = {
  title: PropTypes.string,
}

export default Title
