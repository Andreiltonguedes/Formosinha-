import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";

import { styles } from "../styles/cashback.Styles";

// COMPONENTES
import Header from "../components/cashback/Header";
import Carousel from "../components/cashback/Carousel";
import BalanceCard from "../components/cashback/BalanceCard";
import ActionButtons from "../components/cashback/ActionButtons";
import Categories from "../components/cashback/Catagories";
import SearchBar from "../components/cashback/SearchBar";
import EmpresaCard from "../components/cashback/EmpresaCard";
import CashbackHistory from "../components/cashback/CashBackHistory";
import Footer from "../components/cashback/Footer";

export default function Cashback() {
  const [pesquisa, setPesquisa] = useState("");

  const saldo = 58.75;

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
        <BalanceCard saldo={58.75}
         cashbackMes={12.50}
         pontos={1250} />

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