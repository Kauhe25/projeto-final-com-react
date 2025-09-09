import { useState, useEffect, useTransition } from "react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useNavigate } from "react-router";

import Header from "../../Components/Header";
import listaDepartamentos from "../../Services/Departamentos/listaDepartamentos";
import excluiDepartamento from "../../Services/Departamentos/excluiDepartamento";

import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
import { Message } from "primereact/message";
import type { Departamento } from "../../Types/types";
import type { Axios, AxiosError } from "axios";

const ListagemDepartamentos = () => {

  const navigate = useNavigate();
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const [, startTransition] = useTransition();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [erro, setErro] = useState(''); 
  const [erroExclusao, setErroExclusao] = useState('');

  useEffect(() => {
    
    // testa se o dado ja foi carregado
    if(loaded) return;
    
    const loadDepartamentos = async () => {
      try {
        const {data} = await listaDepartamentos();

        startTransition(() => {
          setDepartamentos(data);
        });

        setLoaded(true);


      } catch (e) {
        console.log(e);
        setErro('Erro ao carregar os departamentos');
      }
    }

    loadDepartamentos();
  }, [loaded]);

  const removeDepartamento = async (id_departamento: number) => {
    try { 
      await excluiDepartamento(id_departamento);
      setLoaded(false); 

    } catch (err: unknown) {
      const e = err as AxiosError<{message: string}>;
      setErroExclusao(e.response?.data?.message || 'Erro ao excluir o departamento');
    }
  }

  const confirmaExclusao = (departamento: Departamento) => {
    setErroExclusao('');  
    confirmDialog({
      message: `Confirma a exclusão do departamento: ${departamento.nome}?`,
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptClassName: 'p-button-danger',
      accept: () => removeDepartamento(departamento.id_departamento),
      reject: () => {}
    });
  }

  // dados mockados (futuramente virão de uma API)
  /*const departamentos: Departamento[] = [
    { id_departamento: 1, nome: "Recursos Humanos", sigla: "RH" },
    { id_departamento: 2, nome: "Tecnologia da Informação", sigla: "TI" },
    { id_departamento: 3, nome: "Marketing", sigla: "MKT" },
    { id_departamento: 4, nome: "Financeiro", sigla: "FIN" },
    { id_departamento: 5, nome: "Vendas", sigla: "VND" },
    { id_departamento: 6, nome: "Operações", sigla: "OPR" },
    { id_departamento: 7, nome: "Pesquisa e Desenvolvimento", sigla: "P&D" },
    { id_departamento: 8, nome: "Atendimento ao Cliente", sigla: "AC" },
    { id_departamento: 9, nome: "Jurídico", sigla: "JUR" },
    { id_departamento: 10, nome: "Logística", sigla: "LOG" },
  ];*/

  // Template de ações (editar, excluir)
  const templateAcoes = (departamento: Departamento) => {
    return (
      <div className="flex justify-between">
        <Button 
          icon="pi pi-pencil" 
          severity="info" 
          rounded 
          text 
          raised
          onClick={() => navigate(`/departamentos/edit/${departamento.id_departamento}`)}
        />

        <Button 
          icon="pi pi-trash" 
          severity="danger" 
          rounded 
          text 
          raised
          onClick={() => {
            confirmaExclusao(departamento);
          }}
          />
      </div>
    )
  }

  return (
    <>
      <Header botaoIcone="pi-plus" botaoUrl="/departamentos/new" titulo="Listagem de Departamentos"/>
      
      <DataTable 
        value={departamentos} 
        showGridlines 
        paginator 
        rows={3} 
        scrollHeight="100%" 
        className="table-fixed w-full mb-8" 
        loading={!loaded}
        hidden={erro !== ''}
        >
        <Column headerClassName="w-[8%]" bodyClassName="w-[8%]" field="id_departamento" header="ID"/>
        <Column headerClassName="w-[50%]" bodyClassName="w-[50%]"  field="nome" header="Nome"/>
        <Column headerClassName="w-[21%]" bodyClassName="w-[21%]"  field="sigla" header="Sigla"/>
        <Column headerClassName="w-[12%]" bodyClassName="w-[12%]"  header="Ações" body={templateAcoes}/>
      </DataTable>

      <Message text={erro} hidden={erro === ''} className="w-full" severity="warn"/>
      <Message text={erroExclusao} hidden={erroExclusao === ''} className="w-full" severity="error"/>
    </>
  )
}

export default ListagemDepartamentos;