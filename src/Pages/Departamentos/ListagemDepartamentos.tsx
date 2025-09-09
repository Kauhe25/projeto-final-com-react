import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const ListagemDepartamentos = () => {

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

  return (
    <>
      <h1>Listagem de Departamentos</h1>
      <DataTable value={departamentos} showGridlines paginator rows={3} scrollHeight="100%">
        <Column field="id_departamento" header="ID"/>
        <Column field="nome" header="Nome"/>
        <Column field="sigla" header="Sigla"/>
      </DataTable>
    </>
  )
}

export default ListagemDepartamentos;