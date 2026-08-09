export interface Historico {
  id?: number;

  usuarioId: number;

  empresaId: number;

  descricao: string;

  valorCompra: number;

  valorCashback: number;

  data: Date;
}