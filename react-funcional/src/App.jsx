import './styles/App.modules.css'

function App() {
  // Function sum
  const sum = (a, b) => a + b

  // Image URL placeholder
  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Walber (w2k)</h1>
      <p>Olá, mundo!</p>
      <p>2 + 2 = {sum(2, 2)}</p>
      <img src={url} alt={url} />
    </div>
  )
}

export default App
