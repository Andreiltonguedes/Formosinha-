import { api } from "./api";
import { API } from "../constants/api";

export const CashbackService = {

  async listar() {
    const response = await api.get(API.CASHBACK);

    return response.data;
  },

  async historico() {
    const response = await api.get(API.HISTORICO);

    return response.data;
  },

  async resgatar(valor: number) {
    const response = await api.post(API.RESGATAR, {
      valor,
    });

    return response.data;
  },

};