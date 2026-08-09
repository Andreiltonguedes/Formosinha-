import React from "react";
import {
  View,
  Text,
  FlatList,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../styles/cashback.Styles";

const historico = [
  {
    id: "1",
    empresa: "Mercado Central",
    compra: "R$ 150,00",
    cashback: "R$ 3,00",
    data: "15/07/2026",
    status: "Recebido",
  },
  {
    id: "2",
    empresa: "Padaria Formosa",
    compra: "R$ 40,00",
    cashback: "R$ 2,00",
    data: "14/07/2026",
    status: "Recebido",
  },
  {
    id: "3",
    empresa: "Farmácia Saúde",
    compra: "R$ 80,00",
    cashback: "R$ 2,40",
    data: "13/07/2026",
    status: "Recebido",
  },
];

export default function CashbackHistory() {
  return (
    <View>

      <Text style={styles.section}>
        Últimos Cashbacks
      </Text>

      <FlatList
        scrollEnabled={false}
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.historyCard}>

            <View style={styles.historyLeft}>

              <View style={styles.historyIcon}>

                <MaterialCommunityIcons
                  name="cash-refund"
                  size={28}
                  color="#16A34A"
                />

              </View>

              <View>

                <Text style={styles.historyCompany}>
                  {item.empresa}
                </Text>

                <Text style={styles.historyPurchase}>
                  Compra: {item.compra}
                </Text>

                <Text style={styles.historyDate}>
                  {item.data}
                </Text>

              </View>

            </View>

            <View style={styles.historyRight}>

              <Text style={styles.historyCashback}>
                + {item.cashback}
              </Text>

              <Text style={styles.historyStatus}>
                {item.status}
              </Text>

            </View>

          </View>

        )}
      />

    </View>
  );
}