import { Platform } from "react-native";

const host = Platform.OS === "android" ? "10.0.2.2" : "localhost";

export const API = {
  BASE_URL: `http://${host}:3000/api`,

  LOGIN: "/auth/login",
  CADASTRO: "/auth/cadastro",
  RECUPERAR_SENHA: "/auth/recuperar-senha",

  USUARIO: "/usuarios",
  EMPRESAS: "/empresas",
  CASHBACK: "/cashback",
  HISTORICO: "/historico",
  RESGATAR: "/resgates",
};