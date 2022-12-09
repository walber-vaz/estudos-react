import Card from "./components/Card"
import ListLang from "./components/ListLang"
import { objContent } from "./utils/obj"

import { shape, string, array, func } from "prop-types"

function App() {
  const content = {
    ...objContent,
  }

  return (
    <>
      <Card content={content} />
      <ListLang arryLang={content.arryLang} />
    </>
  )
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
