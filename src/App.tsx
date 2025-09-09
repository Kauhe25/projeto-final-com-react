import { BrowserRouter, Routes, Route } from "react-router"
import Menu from "./Components/Menu"
import Home from "./Pages/Home"
import ListagemDepartamentos from "./Pages/Departamentos/ListagemDepartamentos"
import FormularioDepartamentos from "./Pages/Departamentos/FormularioDepartamentos"
import NotFound from "./Pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Menu />
      {/* container - centraliza os elementos na tela */}
      <div className="container border-2 mx-auto max-w-7xl p-4 h-90">
        <Routes>
          <Route index element={<Home/>} />
          <Route path="departamentos">
            <Route index element={<ListagemDepartamentos/>} />
            <Route path="new" element={<h1><FormularioDepartamentos/></h1>} />
            <Route path="edit/:id_departamento" element={<h1>Edição de Departamentos</h1>} />
          </Route>

          {/*Precisa ser sempre sa última rota */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
