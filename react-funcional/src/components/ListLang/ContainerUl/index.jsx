import React from 'react'

import PropTypes from 'prop-types'

import styles from '../ListLang.module.css'

const ContainerUl = (props) => {
  const { arryLang } = props

  return (
    <div className={styles.containerUl}>
      <ul>
        {arryLang.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

ContainerUl.propTypes = {
  arryLang: PropTypes.array,
}

export default ContainerUl
