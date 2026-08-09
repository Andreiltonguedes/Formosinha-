import { Empresa } from "../types/empresa";

export const empresas: Empresa[] = [
  {
    id: 1,
    nome: "Mercado Central",
    categoria: "Mercado",
    percentualCashback: 2,
    endereco: "Rua Principal, 100",
    telefone: "(84) 99999-1111",
    ativa: true,
    logo: "",
  },
  {
    id: 2,
    nome: "Padaria Formosa",
    categoria: "Padaria",
    percentualCashback: 5,
    endereco: "Av. Beira Mar",
    telefone: "(84) 99999-2222",
    ativa: true,
    logo: "",
  },
  {
    id: 3,
    nome: "Farmácia Saúde",
    categoria: "Farmácia",
    percentualCashback: 3,
    endereco: "Centro",
    telefone: "(84) 99999-3333",
    ativa: true,
    logo: "",
  },
  {
    id: 4,
    nome: "Posto Litoral",
    categoria: "Combustível",
    percentualCashback: 1.5,
    endereco: "RN-269",
    telefone: "(84) 99999-4444",
    ativa: true,
    logo: "",
  },
];