import bcrypt from 'bcryptjs'

const validateParams = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid params')
  }
}

// validate fields
const validateFields = (event) => {
  const form = event.target
  const name = form.name.value
  const email = form.email.value
  const password = form.password.value
  const errors = []

  if (name.trim() === "") {
    errors.push("O campo nome é obrigatório")
  }

  if (email.trim() === "") {
    errors.push("O campo e-mail é obrigatório")
  }

  if (password.trim() === "" || password.length < 8) {
    errors.push("O campo senha é obrigatório")
  }

  if (errors.length > 0) {
    event.preventDefault()
    alert(errors.join(""))
    return
  }
}

const cadastrarUsuario = (event) => {
  event.preventDefault()

  validateFields(event)

  const form = event.target
  const dados = new FormData(form)

  if (dados.get("name") === "" || dados.get("email") === "" || dados.get("password") === "") {
    alert("Preencha todos os campos")
    form.reset()
    return
  }

  if (dados.get("password").length < 8) {
    alert("A senha deve ter no mínimo 8 caracteres")
    form.reset()
    return
  }

  // crypt password used bcrypt
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(dados.get("password"), salt)
  dados.set("password", hash)

  // name user in lowercase
  dados.set("name", dados.get("name").toLowerCase())

  const usuario = {
    id: Math.random().toString(36).substr(2, 9),
    name: dados.get("name"),
    email: dados.get("email"),
    password: dados.get("password")
  }

  const checkUserExists = (user) => {
    const users = JSON.parse(localStorage.getItem("users")) || []
    const userExists = users.find((u) => u.name === user.name)
    return userExists
  }

  if (checkUserExists(usuario)) {
    alert("Usuário já cadastrado")
    form.reset()
    return
  }

  const saveUser = (user) => {
    const users = JSON.parse(localStorage.getItem("users")) || []
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
  }

  const { name, id } = usuario

  const user = {
    name,
    id
  }

  saveUser(user)
  alert("Usuário cadastrado com sucesso")

  form.reset()
}

export {
  validateParams,
  cadastrarUsuario
}
