import api from "../api";

const dadosDepartamento = async (id_departamento: string) => {
  const result = await api.get(`/departamentos/${id_departamento}`);
  return result;
} 

export default dadosDepartamento;