import api from "../api";

const listaDepartamentos = async () => {
  const response = await api.get('/departamentos');
  return response;
}

export default listaDepartamentos;