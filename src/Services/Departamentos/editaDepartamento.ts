import api from "../api";
import type { Departamento } from "../../Types/types";

const editaDepartamento = async ({id_departamento, nome, sigla}: Departamento) => {
  const result = await api.put(`/departamentos/${id_departamento}`, { 
    nome, sigla 
  });
  return result;
}

export default editaDepartamento;