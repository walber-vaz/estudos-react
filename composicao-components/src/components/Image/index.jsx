import React from 'react'

function Image(props) {
  const { source, alternativeText } = props;

  return (
    <img src={source} alt={alternativeText} />
  )
}

export default Image