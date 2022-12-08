import { useState } from "react"
import Card from "./components/Card"

function App() {
  const [title, setTitle] = useState('Walber (w2k)')
  const [description, setDescription] = useState('FullStack Web Developer')
  const [url, setUrl] = useState('https://via.placeholder.com/150')

  const sumFunc = (a, b) => {
    return (a + b)
  }

  return (
    <Card
      title={title}
      description={description}
      url={url}
      sum={`2 + 2 = ${sumFunc(2, 2)}`}
    />
  )
}

export default App
