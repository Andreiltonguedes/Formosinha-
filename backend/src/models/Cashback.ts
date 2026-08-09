export interface Cashback {
  id?: number;

  usuarioId: number;

  empresaId: number;

  valorCompra: number;

  percentual: number;

  valorCashback: number;

  status: "PENDENTE" | "DISPONIVEL" | "RESGATADO";

  data: Date;
}
