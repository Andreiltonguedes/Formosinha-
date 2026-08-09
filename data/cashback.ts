import { Cashback } from "../types/cashback";

export const cashbacks: Cashback[] = [
  {
    id: 1,
    usuarioId: 1,
    empresaId: 1,
    valorCompra: 150,
    percentual: 2,
    valorCashback: 3,
    status: "Disponível",
    data: "15/07/2026",
  },
  {
    id: 2,
    usuarioId: 1,
    empresaId: 2,
    valorCompra: 80,
    percentual: 5,
    valorCashback: 4,
    status: "Disponível",
    data: "14/07/2026",
  },
  {
    id: 3,
    usuarioId: 1,
    empresaId: 3,
    valorCompra: 120,
    percentual: 3,
    valorCashback: 3.6,
    status: "Pendente",
    data: "13/07/2026",
  },
];