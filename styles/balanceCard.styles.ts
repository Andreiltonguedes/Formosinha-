import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // ==========================
  // CARD PRINCIPAL
  // ==========================

  card: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#FF8C00",
    borderRadius: 30,
    padding: 22,

    shadowColor: "#FF8C00",
    shadowOpacity: 0.30,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 10,
  },

  // ==========================
  // HEADER
  // ==========================

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  walletIcon: {
    width: 65,
    height: 65,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.18)",

    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    color: "#FFF",
    fontSize: 15,
    opacity: 0.9,
  },

  value: {
    color: "#FFF",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 8,
  },

  subtitle: {
    color: "#FFF",
    fontSize: 14,
    marginTop: 5,
    opacity: 0.9,
  },

  // ==========================
  // RESUMO
  // ==========================

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  infoCard: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 15,

    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  infoTitle: {
    marginTop: 10,
    color: "#64748B",
    fontSize: 14,
    fontWeight: "600",
  },

  infoValue: {
    marginTop: 6,
    color: "#0F172A",
    fontSize: 24,
    fontWeight: "bold",
  },

  // ==========================
  // REGRA DE PONTOS
  // ==========================

  ruleBox: {
    marginTop: 22,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "rgba(255,255,255,0.15)",

    borderRadius: 16,

    padding: 14,
  },

  ruleText: {
    marginLeft: 10,
    color: "#FFF",
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },

  bold: {
    fontWeight: "bold",
    color: "#FFF",
  },

  // ==========================
  // BOTÕES
  // ==========================

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  primaryButton: {
    width: "48%",
    height: 54,

    backgroundColor: "#FFF",

    borderRadius: 18,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  primaryButtonText: {
    marginLeft: 8,
    color: "#FF8C00",
    fontSize: 16,
    fontWeight: "bold",
  },

  secondaryButton: {
    width: "48%",
    height: 54,

    borderWidth: 1.5,
    borderColor: "#FFF",

    borderRadius: 18,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  secondaryButtonText: {
    marginLeft: 8,
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
    // ==========================
  // BOTÃO EXPANDIR
  // ==========================

  expandButton: {
    marginTop: 20,
    height: 55,
    borderRadius: 18,

    backgroundColor: "rgba(235, 221, 221, 0.18)",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
  },

  expandText: {
    color: "#f3eaea",
    fontSize: 16,
    fontWeight: "700",
  },

  // ==========================
  // CONTAINER DAS CARTEIRAS
  // ==========================

  walletContainer: {
    marginTop: 20,
  },

  walletCard: {
    backgroundColor: "#f1e6e6",
    borderRadius: 22,
    padding: 18,
    marginBottom: 18,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  walletHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  walletLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  walletCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,

    justifyContent: "center",
    alignItems: "center",

    marginRight: 15,
  },

  walletTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F172A",
  },

  walletCashback: {
    marginTop: 3,
    fontSize: 14,
    color: "#64748B",
  },

  walletSaldo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#16A34A",
  },

  // ==========================
  // PONTOS
  // ==========================

  pointsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  walletPoints: {
    marginLeft: 8,
    color: "#64748B",
    fontSize: 15,
    fontWeight: "600",
  },

  // ==========================
  // BARRA DE PROGRESSO
  // ==========================

  progressBackground: {
    marginTop: 15,
    height: 10,
    backgroundColor: "#ECECEC",
    borderRadius: 8,
    overflow: "hidden",
  },

  progress: {
    height: "100%",
    borderRadius: 8,
  },

  progressText: {
    marginTop: 8,
    color: "#94A3B8",
    fontSize: 13,
    textAlign: "right",
  },

  // ==========================
  // BOTÃO USAR CASHBACK
  // ==========================

  useButton: {
    marginTop: 20,
    height: 48,
    borderRadius: 15,

    backgroundColor: "#FF8C00",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  useButtonText: {
    marginLeft: 10,
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  // ==========================
  // NÍVEL
  // ==========================

  levelContainer: {
    marginTop: 18,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  levelBadge: {
    backgroundColor: "#FACC15",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  levelText: {
    color: "#78350F",
    fontWeight: "bold",
    fontSize: 13,
  },

  nextLevelText: {
    color: "#353d49",
    fontSize: 13,
  },
    // ==========================
  // INDICADORES DO CARROSSEL
  // ==========================

  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },

  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 5,
  },

  indicatorActive: {
    width: 28,
    backgroundColor: "#FF8C00",
  },

  // ==========================
  // RODAPÉ
  // ==========================

  footer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  footerText: {
    color: "#64748B",
    fontSize: 14,
  },

  footerValue: {
    color: "#16A34A",
    fontSize: 16,
    fontWeight: "bold",
  },

  // ==========================
  // BADGES
  // ==========================

  badge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignSelf: "flex-start",
  },

  badgeText: {
    color: "#15803D",
    fontWeight: "bold",
    fontSize: 12,
  },

  // ==========================
  // SOMBRAS EXTRAS
  // ==========================

  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
  },

  // ==========================
  // ESPAÇAMENTOS
  // ==========================

  mt10: {
    marginTop: 10,
  },

  mt20: {
    marginTop: 20,
  },

  mb10: {
    marginBottom: 10,
  },

  mb20: {
    marginBottom: 20,
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});