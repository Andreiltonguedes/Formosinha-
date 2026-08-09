export interface Resgate {
  id?: number;

  usuarioId: number;

  valor: number;

  metodo: "PIX" | "CONTA" | "CARTEIRA";

  status: "PENDENTE" | "APROVADO" | "RECUSADO";

  data: Date;
}