import Menu from "./Components/Menu"

function App() {
  return (
    <>
      <Menu />
      {/* container - centraliza os elementos na tela */}
      <div className="container border-2 mx-auto max-w-7xl p-4 h-80">
        <h1 className="text-3xl font-bold underline text-center">
          Projeto final em React
        </h1>
      </div>
    </>
  )
}

export default App
