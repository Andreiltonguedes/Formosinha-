export interface Empresa {
  id: number;
  nome: string;
  categoria: string;
  percentualCashback: number;
  endereco: string;
  telefone: string;
  logo?: string;
  ativa: boolean;
}