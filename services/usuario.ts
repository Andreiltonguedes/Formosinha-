import { API } from "../constants/api";
import { api } from "./api";

export const UsuarioService = {

  async buscar(id: number) {
    const response = await api.get(`${API.USUARIO}/${id}`);

    return response.data;
  },

  async atualizar(id: number, dados: any) {
    const response = await api.put(`${API.USUARIO}/${id}`, dados);

    return response.data;
  },

};