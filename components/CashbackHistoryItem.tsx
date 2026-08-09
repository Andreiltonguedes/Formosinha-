import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  empresa: string;
  compra: string;
  cashback: string;
  data: string;
}

export default function HistoricoCard(props: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.empresa}>
        {props.empresa}
      </Text>

      <Text>
        Compra: {props.compra}
      </Text>

      <Text style={styles.cashback}>
        + {props.cashback}
      </Text>

      <Text style={styles.data}>
        {props.data}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 18,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 2,
  },

  empresa: {
    fontSize: 18,
    fontWeight: "bold",
  },

  cashback: {
    color: "#2E7D32",
    fontWeight: "bold",
    marginTop: 5,
  },

  data: {
    color: "#777",
    marginTop: 8,
  },
});