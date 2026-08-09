export interface Usuario {
  id?: number;

  nome: string;

  cpf: string;

  telefone: string;

  email: string;

  senha: string;

  saldoCashback: number;

  foto?: string;

  ativo: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}