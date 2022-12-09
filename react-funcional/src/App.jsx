import Card from "./components/Card"
import ListLang from "./components/ListLang"
import { objContent } from "./utils/obj"

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

export default App
