export interface Empresa {
  id?: number;

  nome: string;

  categoria: string;

  cnpj: string;

  endereco: string;

  telefone: string;

  email: string;

  percentualCashback: number;

  logo?: string;

  ativa: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}