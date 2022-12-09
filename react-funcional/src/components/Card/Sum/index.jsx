import React from 'react'

import PropTypes from 'prop-types'

const Sum = ({sum}) => {
  return (
    <p>{`2 + 2 = ${sum(2, 2)}`}</p>
  )
}

Sum.propTypes = {
  sum: PropTypes.func,
}

export default Sum
