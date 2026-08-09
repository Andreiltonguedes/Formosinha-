import { api } from "./api";
import { API } from "../constants/api";

export const AuthService = {

  async login(email: string, senha: string) {
    const response = await api.post(API.LOGIN, {
      email,
      senha,
    });

    return response.data;
  },

  async cadastrar(usuario: any) {
    const response = await api.post(API.CADASTRO, usuario);

    return response.data;
  },

  async recuperarSenha(email: string) {
    const response = await api.post(API.RECUPERAR_SENHA, {
      email,
    });

    return response.data;
  },

};