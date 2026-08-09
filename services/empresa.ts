import { api } from "./api";
import { API } from "../constants/api";

export const EmpresaService = {

  async listar() {
    const response = await api.get(API.EMPRESAS);

    return response.data;
  },

};