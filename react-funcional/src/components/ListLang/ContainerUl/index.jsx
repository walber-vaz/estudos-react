import React from 'react'

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

export default ContainerUl
