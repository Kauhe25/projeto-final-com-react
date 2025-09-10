
import Header from "../../Components/Header";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Message } from "primereact/message";
import insereDepartamento from "../../Services/Departamentos/insereDepartamento";
import dadosDepartamento from "../../Services/Departamentos/dadosDepartamento";
import editaDepartamento from "../../Services/Departamentos/editaDepartamento";

import type { AxiosError } from "axios";

const FormularioDepartamentos = () => {

  const navigate = useNavigate();
  const { id_departamento } = useParams();

  const prefixoTitulo = id_departamento ? 'Edição' : 'Cadastro';
  const [nome, setNome] = useState<string>('');
  const [sigla, setSigla] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

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


  const cadastroDepartamento = async () => {
    try {

      setLoading(true);
      await insereDepartamento({nome, sigla});

      //direciona para a tela de listagem
      navigate('/departamentos');
    } catch (err: unknown) {
      const e = err as AxiosError<{message: string}>;
      setErro(e.response?.data?.message || 'Erro interno');
    }
    setLoading(false);
  }

  const atualizaDepartamento = async () => {
    try {
      await editaDepartamento({id_departamento, nome, sigla});

      //direciona para a tela de listagem
      navigate('/departamentos');
    } catch (err: unknown) {
      const e = err as AxiosError<{message: string}>;
      setErro(e.response?.data?.message || 'Erro interno');
    }
    setLoading(false);
  }

  useEffect(() => {
    if(id_departamento){
      const loadDadosDepartamento = async () => {
        try {
          const {data} = await dadosDepartamento(id_departamento);
          
          setNome(data[0].nome);
          setSigla(data[0].sigla);
        } catch (err: unknown) {
          alert('Erro ao carregar os dados do departamento');
          const e = err as AxiosError<{message: string}>;
          setErro(e.response?.data?.message || 'Erro ao carregar os dados do departamento');
        }
      }
      loadDadosDepartamento();
    }
  }, [id_departamento]);
  
  
  return (
    <>
      <Header 
        botaoIcone="pi-chevron-left" 
        botaoUrl="/departamentos" 
        titulo={`${prefixoTitulo} de Departamentos`} 
      />
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
            loading={loading}
            icon="pi pi-save"
            label="Salvar"
            severity="warning"
            className="h-[58px]"
            onClick={() => {
              if(validarFormulario()) {
                setLoading(true);
                if(!id_departamento){
                  cadastroDepartamento();
                }else{
                  atualizaDepartamento();
                }
                
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