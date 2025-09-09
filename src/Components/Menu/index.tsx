import { MegaMenu } from "primereact/megamenu";
import menuItems from "./menuItems";
import { Link, useNavigate } from "react-router";
import { Button } from "primereact/button";

const Menu = () => {

  // Serve para navegar nos links das rotas via JS
  const navigate = useNavigate()
  return (
    <>
      <MegaMenu model={menuItems()} breakpoint="900px" />
      <hr />
      <a href="/departamentos">Departamentos</a>
      <hr />
      <Link to="/departamentos">Departamentos</Link>
      <hr />
      <Button severity="danger" label="Departamentos" 
        onClick={() => {
          navigate('/departamentos')
        }}
      />

    </>
  )
}

export default Menu;