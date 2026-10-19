import { API } from "../constants/api";
import { api } from "./api";

export const CashbackService = {

  async listar(usuarioId: number) {
    const response = await api.get(`${API.CASHBACK}/${usuarioId}`);

    return response.data;
  },

  async historico(usuarioId: number) {
    const response = await api.get(`${API.HISTORICO}/${usuarioId}`);

    return response.data;
  },

  async resgatar(usuarioId: number, valor: number) {
    const response = await api.post(API.RESGATAR, {
      usuarioId,
      valor,
    });

    return response.data;
  },

};