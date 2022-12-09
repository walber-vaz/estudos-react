import React from 'react'

import styles from '../ListLang.module.css'

const ContainerLang = (props) => {
  return (
    <div className={styles.containerLang}>
      {props.children}
    </div>
  )
}

export default ContainerLang
