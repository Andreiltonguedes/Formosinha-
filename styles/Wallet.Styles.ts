import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({

  // CARD
  card: {
  width: "100%",
  minHeight: 430,

  borderRadius: 24,
  padding: 18,

  justifyContent: "space-between",

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.20,
  shadowRadius: 10,

  elevation: 0,
},

  // TOPO
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "rgba(179, 130, 130, 0.2)",

    justifyContent: "center",
    alignItems: "center",
  },

  cashbackBadge: {
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  cashbackText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 13,
  },

  // TÍTULO
  title: {
    marginTop: 11,
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 2,
    color: "rgba(255,255,255,0.80)",
    fontSize: 12,
  },
    // ==========================
  // SALDO
  // ==========================

  balanceContainer: {
    marginTop: 18,
  },

  balanceLabel: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 12,
    marginBottom: 6,
  },

  balanceValue: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  eyeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  eyeText: {
    color: "#FFF",
    marginLeft: 6,
    fontSize: 12,
    fontWeight: "600",
  },

  // ==========================
  // PONTOS
  // ==========================

  pointsContainer: {
    marginTop: 20,
  },

  pointsNumber: {
    color: "#f0dede",
    fontSize: 24,
    fontWeight: "bold",
  },

  pointsLabel: {
    color: "rgba(255,255,255,0.80)",
    fontSize: 13,
    marginTop: 2,
  },

  // ==========================
  // BARRA DE PROGRESSO
  // ==========================

  progressBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 12,
  },

  progressFill: {
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#FFD700",
  },

  progressText: {
    color: "#FFF",
    fontSize: 12,
    marginTop: 8,
    lineHeight: 18,
  },
    // ==========================
  // BOTÃO
  // ==========================

  button: {
    marginTop: 18,
    height: 46,
    borderRadius: 16,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5,

    elevation: 5,
  },

  buttonDisabled: {
    backgroundColor: "rgba(250, 246, 246, 0.25)",
  },

  buttonEnabled: {
    backgroundColor: "#16A34A",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 8,
  },

  // ==========================
  // STATUS
  // ==========================

  statusContainer: {
    marginTop: 12,
    alignItems: "center",
  },

  statusLocked: {
    color: "#FFE082",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },

  statusUnlocked: {
    color: "#BBF7D0",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },

  // ==========================
  // CARROSSEL
  // ==========================

  carouselContainer: {
    marginTop: 18,
    paddingLeft: 20,
    paddingRight: 5,
  },

  // ==========================
  // INDICADORES
  // ==========================

  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 8,
  },

  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#CBD5E1",
    marginHorizontal: 4,
  },

  indicatorActive: {
    width: 24,
    backgroundColor: "#FF8C00",
  },

  // ==========================
  // UTILITÁRIOS
  // ==========================

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});