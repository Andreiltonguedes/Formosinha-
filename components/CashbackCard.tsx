import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  saldo: number;
}

export default function CashbackCard({
  saldo,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>
        Saldo Disponível
      </Text>

      <Text style={styles.valor}>
        R$ {saldo.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FF8C00",
    margin: 20,
    padding: 25,
    borderRadius: 15,
  },

  label: {
    color: "#FFF",
    fontSize: 18,
  },

  valor: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },
});