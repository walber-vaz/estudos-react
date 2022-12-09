import React from 'react'

import PropTypes from 'prop-types'

import styles from '../ListLang.module.css'

const ContainerLang = (props) => {
  return (
    <div className={styles.containerLang}>
      {props.children}
    </div>
  )
}

ContainerLang.defaultProps = {
  children: "Nenhum componente filho encontrado",
}

ContainerLang.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContainerLang
