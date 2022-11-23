import React from 'react'
import PropTypes from 'prop-types';

function Image(props) {
  const { source, alternativeText } = props;

  return (
    <img src={source} alt={alternativeText} />
  )
}

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alternativeText: PropTypes.string.isRequired
}

export default Image