import api from "../api";

const excluiDepartamento = async (id_departamento: number) => {
  const result = await api.delete(`/departamentos/${id_departamento}`);
  return result;
} 

export default excluiDepartamento;