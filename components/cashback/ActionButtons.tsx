import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ActionButtons() {
  const actions = [
    {
      id: 1,
      titulo: "Pagar",
      icon: "credit-card-outline",
      color: "#16A34A",
    },
    {
      id: 2,
      titulo: "QR Code",
      icon: "qrcode-scan",
      color: "#FF8C00",
    },
    {
      id: 3,
      titulo: "Resgatar",
      icon: "cash-fast",
      color: "#2563EB",
    },
    {
      id: 4,
      titulo: "Extrato",
      icon: "file-document-outline",
      color: "#9333EA",
    },
  ];

  return (
    <View style={styles.container}>
      {actions.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: item.color },
            ]}
          >
            <MaterialCommunityIcons
              name={item.icon as any}
              size={28}
              color="#FFF"
            />
          </View>

          <Text style={styles.text}>
            {item.titulo}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginHorizontal: 20,

    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    width: "23%",
    alignItems: "center",
  },

  iconContainer: {
    width: 68,
    height: 68,
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 6,
  },

  text: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
    textAlign: "center",
  },
});