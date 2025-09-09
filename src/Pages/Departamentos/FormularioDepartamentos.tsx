import Header from "../../Components/Header";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState, useRef } from "react";
import { Message } from "primereact/message";

const FormularioDepartamentos = () => {

  const [nome, setNome] = useState<string>('');
  const [sigla, setSigla] = useState<string>('');
  const [erro, setErro] = useState<string>('');

  //Através do useRef conseguimos ter acesso a um elemento HTML diretamente e adicionar foco nele.

  const nomeRef = useRef<HTMLInputElement>(null);
  const siglaRef = useRef<HTMLInputElement>(null);

  const validarFormulario = () => {
    setErro('');

    if(nome.trim() === '') {
      setErro('O nome do departamento é obrigatório');
      nomeRef.current?.focus();
      return false;
    }

    if(sigla.trim() === '') {
      setErro('A sigla do departamento é obrigatória');
      siglaRef.current?.focus();
      return false;
    }

    return true;
  }
  
  return (
    <>
      <Header botaoIcone="pi-chevron-left" botaoUrl="/departamentos" titulo="Cadastro de Departamentos" />
      <div className="flex gap-4 mb-6">
        <div className="flex flex-col gap-2 w-1/3">
        <label htmlFor="nome">Nome</label>
          <InputText 
            id="nome"
            autoComplete="off"
            value={nome}
            onChange={(evt) => {
              setNome(evt.currentTarget.value);
            }}
            ref={nomeRef}
          />
        </div>

        <div className="flex flex-col gap-2 w-1/4">
          <label htmlFor="sigla">Sigla</label>
          <InputText 
            id="sigla"
            autoComplete="off"
            value={sigla}
            onChange={(evt) => {
              setSigla(evt.currentTarget.value);
            }}
            ref={siglaRef}
          />
        </div>
        <div className="flex gap-2 items-end">
          <Button 
            icon="pi pi-save"
            label="Salvar"
            severity="warning"
            className="h-[58px]"
            onClick={() => {
              if(validarFormulario()) {
                alert(`Vai salvar o departamento ${nome} - ${sigla}`);
              }
            }}
          />
        </div>
      </div>
      <Message text={erro} severity="error" hidden={erro === ''}/>
    </>
  )
}

export default FormularioDepartamentos;