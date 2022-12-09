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

ContainerUl.defaultProps = {
  arryLang: ["Nenhuma linguagem encontrada"],
}

ContainerUl.propTypes = {
  arryLang: PropTypes.array.isRequired,
}

export default ContainerUl
