import styles from "./Form.module.css"

import { cadastrarUsuario } from '../../utils/validateParams'

const Form = () => {
  return (
    <>
      <div className={styles.formControl}>
        <h2>Cadastro</h2>
        <form method="get" onSubmit={cadastrarUsuario}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu E-mail"
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}

export default Form
