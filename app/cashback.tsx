import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
} from "react-native";

import { styles } from "../styles/cashback.Styles";

// COMPONENTES
import ActionButtons from "../components/cashback/ActionButtons";
import BalanceCard from "../components/cashback/BalanceCard";
import Carousel from "../components/cashback/Carousel";
import CashbackHistory from "../components/cashback/CashBackHistory";
import Categories from "../components/cashback/Catagories";
import EmpresaCard from "../components/cashback/EmpresaCard";
import Footer from "../components/cashback/Footer";
import Header from "../components/cashback/Header";
import SearchBar from "../components/cashback/SearchBar";
import { CashbackService } from "../services/cashback";
import { UsuarioService } from "../services/usuario";

const USUARIO_ID = 1;

export default function Cashback() {
  const [pesquisa, setPesquisa] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [cashbackMes, setCashbackMes] = useState(0);
  const [pontos, setPontos] = useState(0);

  useEffect(() => {
    async function carregarDados() {
      try {
        const usuarioData = await UsuarioService.buscar(USUARIO_ID);
        const usuario = Array.isArray(usuarioData) ? usuarioData[0] : usuarioData;
        const saldoAtual = Number(usuario?.saldoCashback || 0);
        setSaldo(saldoAtual);
        setPontos(Math.min(Math.round(saldoAtual * 10), 500));

        const cashbackData = await CashbackService.listar(USUARIO_ID);
        const lista = Array.isArray(cashbackData) ? cashbackData : [];
        const totalCashback = lista.reduce(
          (total: number, item: any) => total + Number(item.valorCashback || 0),
          0
        );
        setCashbackMes(totalCashback);
      } catch (error) {
        console.error("Erro ao carregar dados do cashback:", error);
      }
    }

    carregarDados();
  }, []);

  const empresas = [
    {
      id: 1,
      nome: "Mercado Central",
      categoria: "Mercado",
      cashback: "2%",
    },
    {
      id: 2,
      nome: "Padaria Formosa",
      categoria: "Padaria",
      cashback: "5%",
    },
    {
      id: 3,
      nome: "Farmácia Saúde",
      categoria: "Farmácia",
      cashback: "3%",
    },
    {
      id: 4,
      nome: "Posto Litoral",
      categoria: "Posto",
      cashback: "1,5%",
    },
    {
      id: 5,
      nome: "Restaurante Sabor da Praia",
      categoria: "Restaurante",
      cashback: "4%",
    },
    {
      id: 6,
      nome: "Pousada Formosa",
      categoria: "Hotel",
      cashback: "6%",
    },
  ];

  const empresasFiltradas = empresas.filter((empresa) =>
    empresa.nome
      .toLowerCase()
      .includes(pesquisa.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Header */}
        <Header />

        {/* Banner */}
        <Carousel />

        {/* Saldo */}
        <BalanceCard
          saldo={saldo}
          cashbackMes={cashbackMes}
          pontos={pontos}
        />

        {/* Botões */}
        <ActionButtons />

        {/* Categorias */}
        <Categories />

        {/* Empresas */}
        <Text style={styles.section}>
          Empresas Parceiras
        </Text>

        <SearchBar
          pesquisa={pesquisa}
          setPesquisa={setPesquisa}
        />

        {empresasFiltradas.map((empresa) => (
          <EmpresaCard
            key={empresa.id}
            nome={empresa.nome}
            categoria={empresa.categoria}
            cashback={empresa.cashback}
          />
        ))}

        {/* Histórico */}
        <CashbackHistory />

      </ScrollView>

      {/* Footer */}
      <Footer />

    </SafeAreaView>
  );
}