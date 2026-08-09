import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from "react-native";

import { styles } from "../styles/historicoCashback.styles";

export default function HistoricoCashback() {

  const historico = [
    {
      id: 1,
      empresa: "Mercado Central",
      compra: "R$ 150,00",
      cashback: "R$ 3,00",
      data: "15/07/2026",
    },
    {
      id: 2,
      empresa: "Padaria Formosa",
      compra: "R$ 40,00",
      cashback: "R$ 2,00",
      data: "14/07/2026",
    },
    {
      id: 3,
      empresa: "Farmácia Saúde",
      compra: "R$ 120,00",
      cashback: "R$ 3,60",
      data: "12/07/2026",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Text style={styles.title}>
          Histórico de Cashback
        </Text>

        {historico.map((item) => (
          <View
            key={item.id}
            style={styles.card}
          >
            <Text style={styles.empresa}>
              {item.empresa}
            </Text>

            <Text>
              Compra: {item.compra}
            </Text>

            <Text style={styles.cashback}>
              Cashback: +{item.cashback}
            </Text>

            <Text style={styles.data}>
              {item.data}
            </Text>
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}