import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useNavigate } from "react-router";
import Header from "../../Components/Header";

const ListagemDepartamentos = () => {

  const navigate = useNavigate();

  interface Departamento {
    id_departamento: number;
    nome: string;
    sigla: string;
  }

  // dados mockados (futuramente virão de uma API)
  const departamentos: Departamento[] = [
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
  ];

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
          onClick={() => alert(`Excluirá o departamento ${departamento.nome} `)}
          />
      </div>
    )
  }

  return (
    <>
      <Header botaoIcone="pi-plus" botaoUrl="/departamentos/new" titulo="Listagem de Departamentos" />
      <DataTable value={departamentos} showGridlines paginator rows={3} scrollHeight="100%" 
        className="table-fixed w-full">
        <Column headerClassName="w-[8%]" bodyClassName="w-[8%]" field="id_departamento" header="ID"/>
        <Column headerClassName="w-[50%]" bodyClassName="w-[50%]"  field="nome" header="Nome"/>
        <Column headerClassName="w-[21%]" bodyClassName="w-[21%]"  field="sigla" header="Sigla"/>
        <Column headerClassName="w-[12%]" bodyClassName="w-[12%]"  header="Ações" body={templateAcoes}/>
      </DataTable>
    </>
  )
}

export default ListagemDepartamentos;