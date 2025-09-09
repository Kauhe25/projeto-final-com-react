import { useNavigate } from "react-router";
import { Button } from "primereact/button";

type Header = {
  titulo: string,
  botaoUrl: string,
  botaoIcone: string
};

const Header = ({titulo, botaoUrl, botaoIcone}: Header) => {

  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between py-4">
      <h1 className="text-2xl">{titulo}</h1>
        <Button 
          icon={`pi ${botaoIcone}`} 
          severity="success" 
          rounded 
          text 
          raised
          onClick={() => {
            navigate(botaoUrl);
          }}
            />
      </div>
  );
}

export default Header;