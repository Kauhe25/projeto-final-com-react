import { MegaMenu } from "primereact/megamenu";
import menuItems from "./menuItems";
import { useNavigate } from "react-router";

const Menu = () => {

  // Serve para navegar nos links das rotas via JS
  const navigate = useNavigate()
  return (
    <>
      <MegaMenu model={menuItems(navigate)} breakpoint="900px" />
    </>
  )
}

export default Menu;