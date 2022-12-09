import React from 'react'

import PropTypes from 'prop-types'

const Sum = ({sum}) => {
  return (
    <p>{`2 + 2 = ${sum(2, 2)}`}</p>
  )
}

Sum.defaultProps = {
  sum: () => "Nenhuma função encontrada",
}

Sum.propTypes = {
  sum: PropTypes.func.isRequired,
}

export default Sum
