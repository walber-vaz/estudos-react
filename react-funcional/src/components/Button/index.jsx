import styles from './Button.module.css'

const Button = () => {
  const handleClick = () => {
    console.log('Clicou no botão!')
  }

  return (
    <>
      <p className={styles.desc}>Clique para fazer um evento:</p>
      <button type="button" onClick={handleClick} className={styles.btn} >Click me!</button>
    </>
  )
}

export default Button
