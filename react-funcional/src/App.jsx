import Card from "./components/Card"

function App() {
  const content = {
    title: 'Walber (w2k)',
    description: 'FullStack Web Developer',
    url: 'https://media0.giphy.com/media/1iNIkQBAwEkUuTpikf/giphy.gif?cid=790b7611116f6b6298f8e00987081551b9ee5af80b4f6bde&rid=giphy.gif&ct=g',
    sum(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('The parameters must be numbers')
      }
      return (Number(a) + Number(b))
    }
  }

  return (
    <Card content={content} />
  )
}

export default App
