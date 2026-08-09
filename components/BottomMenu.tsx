import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

export default function BottomMenu() {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.item}
        onPress={() => router.push("/cashback")}
      >
        <Text style={styles.icon}>🏠</Text>
        <Text style={styles.label}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => router.push("/historicoCashback")}
      >
        <Text style={styles.icon}>📄</Text>
        <Text style={styles.label}>Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => router.push("/resgatarCashback")}
      >
        <Text style={styles.icon}>💰</Text>
        <Text style={styles.label}>Resgatar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => router.push("/perfil")}
      >
        <Text style={styles.icon}>👤</Text>
        <Text style={styles.label}>Perfil</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#DDD",
  },

  item: {
    alignItems: "center",
  },

  icon: {
    fontSize: 22,
  },

  label: {
    marginTop: 4,
    fontSize: 12,
    color: "#333",
  },
});