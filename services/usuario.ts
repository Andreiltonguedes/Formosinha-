import { api } from "./api";
import { API } from "../constants/api";

export const UsuarioService = {

  async buscar() {
    const response = await api.get(API.USUARIO);

    return response.data;
  },

  async atualizar(dados: any) {
    const response = await api.put(API.USUARIO, dados);

    return response.data;
  },

};