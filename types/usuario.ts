export interface Usuario {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  saldoCashback: number;
  foto?: string;
}