import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  const hora = new Date().getHours();

  const saudacao =
    hora < 12
      ? "Bom dia"
      : hora < 18
      ? "Boa tarde"
      : "Boa noite";

  return (
    <View style={styles.container}>
      {/* Informações do usuário */}
      <View style={styles.userContainer}>
        <Image
          source={require("../../assets/images/avatar.png")}
          style={styles.avatar}
        />

        <View style={styles.textContainer}>
          <Text style={styles.greeting}>
            {saudacao} 👋
          </Text>

          <Text style={styles.name}>
            Andreilton
          </Text>

          <Text style={styles.message}>
            Seja bem-vindo ao CashBF
          </Text>

          <View style={styles.levelContainer}>
            <MaterialCommunityIcons
              name="star-circle"
              size={16}
              color="#FFD700"
            />

            <Text style={styles.levelText}>
              Cliente Ouro
            </Text>

            <Text style={styles.points}>
              • 1.250 pontos
            </Text>
          </View>
        </View>
      </View>

      {/* Ícones */}
      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={24}
            color="#FF8C00"
          />

          <View style={styles.badge} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIcons
            name="cog-outline"
            size={24}
            color="#FF8C00"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF8F2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 20,

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 6,
  },

  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: "#FF8C00",
    marginRight: 15,
  },

  textContainer: {
    flex: 1,
  },

  greeting: {
    color: "#64748B",
    fontSize: 14,
  },

  name: {
    marginTop: 2,
    fontSize: 24,
    fontWeight: "700",
    color: "#0F172A",
  },

  message: {
    marginTop: 3,
    color: "#16A34A",
    fontSize: 14,
    fontWeight: "600",
  },

  levelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  levelText: {
    marginLeft: 4,
    color: "#FF8C00",
    fontWeight: "700",
    fontSize: 13,
  },

  points: {
    marginLeft: 6,
    color: "#64748B",
    fontSize: 12,
  },

  icons: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconButton: {
    width: 46,
    height: 46,
    borderRadius: 23,

    backgroundColor: "#FFF",

    justifyContent: "center",
    alignItems: "center",

    marginLeft: 10,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 4,
  },

  badge: {
    position: "absolute",
    top: 10,
    right: 10,

    width: 10,
    height: 10,

    borderRadius: 5,

    backgroundColor: "#EF4444",

    borderWidth: 2,
    borderColor: "#FFF",
  },
});