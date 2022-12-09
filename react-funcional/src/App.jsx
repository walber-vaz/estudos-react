import Card from "./components/Card"
import ListLang from "./components/ListLang"
import Button from "./components/Button"

import { objContent } from "./utils/obj"
import { shape, string, array, func } from "prop-types"

import styles from "./App.module.css"
import Form from "./components/Form"

function App() {
  const content = {
    ...objContent,
  }

  return (
    <>
      <div className={styles.cardContainer}>
        <Card content={content} />
        <ListLang arryLang={content.arryLang} />
      </div>
      <div className={styles.content}>
        <Button />
        <Form />
      </div>
    </>
  )
}

App.defaultProps = {
  content: {
    title: "Nenhum título encontrado",
    description: "Nenhuma descrição encontrada",
    url: "Nenhuma url encontrada",
    sum: () => "Nenhuma função encontrada",
    arryLang: ["Nenhuma linguagem encontrada"],
  },
}

App.propTypes = {
  content: shape({
    title: string.isRequired,
    description: string.isRequired,
    url: string.isRequired,
    sum: func.isRequired,
    arryLang: array.isRequired
  }),
}

export default App
