import React from 'react'

const Sum = ({sum}) => {
  return (
    <p>{`2 + 2 = ${sum(2, 2)}`}</p>
  )
}

export default Sum
