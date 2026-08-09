import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  nome: string;
  cashback: string;
}

export default function EmpresaCard({
  nome,
  cashback,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>
        {nome}
      </Text>

      <Text style={styles.cashback}>
        Cashback {cashback}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 18,
    borderRadius: 12,
    elevation: 2,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },

  cashback: {
    color: "#2E7D32",
    marginTop: 5,
    fontWeight: "bold",
  },
});