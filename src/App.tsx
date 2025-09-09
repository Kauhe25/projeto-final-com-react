import { BrowserRouter, Routes, Route } from "react-router"
import Menu from "./Components/Menu"

function App() {
  return (
    <BrowserRouter>
      <Menu />
      {/* container - centraliza os elementos na tela */}
      <div className="container border-2 mx-auto max-w-7xl p-4 h-80">
        <Routes>
          <Route index element={<h1>Projeto final em React</h1>} />
          <Route path="departamentos">
            <Route index element={<h1>Listagem de Departamentos</h1>} />
            <Route path="new" element={<h1>Cadastro de Departamentos</h1>} />
            <Route path=":id_departamento" element={<h1>Edição de Departamentos</h1>} />
          </Route>

          {/*Precisa ser sempre sa última rota */}
          <Route path="*" element={<h1>Erro 404 - Página não encontrada!</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
