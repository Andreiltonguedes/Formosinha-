import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // =========================
  // CONTAINER
  // =========================

  container: {
    flex: 1,
    backgroundColor: "#F4F6F9",
  },

  scrollContent: {
    paddingBottom: 120,
  },

  // =========================
  // HEADER
  // =========================

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 15,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#FFE6C7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  title: {
    fontSize: 14,
    color: "#64748B",
  },

  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0F172A",
    marginTop: 3,
  },

  notification: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFF",
    justifyContent: "center",
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

  // =========================
  // BANNER
  // =========================

  bannerContainer: {
    marginBottom: 25,
  },

  banner: {
    height: 170,
    borderRadius: 28,
    backgroundColor: "#FF8C00",
    marginHorizontal: 20,
    padding: 25,
    justifyContent: "center",

    shadowColor: "#FF8C00",
    shadowOpacity: 0.35,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 8,
  },

  bannerTitle: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
  },

  bannerText: {
    color: "#FFF",
    fontSize: 15,
    marginTop: 8,
    lineHeight: 22,
    opacity: 0.95,
  },

  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },

  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 5,
  },

  indicatorActive: {
    width: 25,
    backgroundColor: "#FF8C00",
  },

  // =========================
  // CARD SALDO
  // =========================

  cardSaldo: {
    marginHorizontal: 20,
    backgroundColor: "#FF8C00",
    borderRadius: 28,
    padding: 25,

    shadowColor: "#FF8C00",
    shadowOpacity: 0.35,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 10,
  },

  label: {
    color: "#FFF",
    fontSize: 16,
    opacity: 0.9,
  },

  valor: {
    color: "#FFF",
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 10,
  },

  rendimento: {
    color: "#FFF",
    fontSize: 15,
    opacity: 0.95,
  },

  saldoFooter: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  saldoItem: {
    alignItems: "center",
  },

  saldoNumero: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  saldoDescricao: {
    color: "#FFF",
    opacity: 0.9,
    marginTop: 4,
    fontSize: 13,
  },

  // =========================
  // TÍTULOS DAS SEÇÕES
  // =========================

  section: {
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 15,
    fontSize: 21,
    fontWeight: "bold",
    color: "#0F172A",
  },
    // =========================
  // ACTION BUTTONS
  // =========================

  actionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 25,
  },

  actionCard: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 15,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  actionText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
  },

  // =========================
  // CATEGORIAS
  // =========================

  categoriesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  categoryCard: {
    width: 120,
    backgroundColor: "#FFF",
    borderRadius: 22,
    padding: 18,
    marginRight: 15,
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

  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFF3E0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  categoryTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
    marginBottom: 10,
  },

  percentBadge: {
    backgroundColor: "#16A34A",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  categoryPercent: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  // =========================
  // SEARCH BAR
  // =========================

  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 18,
    paddingHorizontal: 15,
    height: 56,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#0F172A",
  },

  filterButton: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "#FF8C00",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,

    shadowColor: "#FF8C00",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  locationButton: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },
    // =========================
  // EMPRESA CARD
  // =========================

  cardEmpresa: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#FFF",

    marginHorizontal: 20,
    marginBottom: 15,

    padding: 18,

    borderRadius: 20,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  empresaInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconEmpresa: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFF3E0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  nomeEmpresa: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0F172A",
  },

  categoria: {
    color: "#64748B",
    marginTop: 4,
    fontSize: 13,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  ratingText: {
    marginLeft: 5,
    color: "#94A3B8",
    fontSize: 12,
  },

  rightContent: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginLeft: 10,
  },

  cashbackBadge: {
    backgroundColor: "#16A34A",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },

  cashbackBadgeText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  favoriteButton: {
    marginTop: 12,
  },

  // =========================
  // HISTÓRICO
  // =========================

  historyCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#FFF",

    marginHorizontal: 20,
    marginBottom: 15,

    padding: 18,

    borderRadius: 20,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  historyLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  historyIcon: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#ECFDF5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  historyRight: {
    alignItems: "flex-end",
  },

  historyCompany: {
    fontWeight: "700",
    fontSize: 16,
    color: "#0F172A",
  },

  historyPurchase: {
    color: "#64748B",
    marginTop: 4,
    fontSize: 13,
  },

  historyDate: {
    color: "#94A3B8",
    marginTop: 3,
    fontSize: 12,
  },

  historyCashback: {
    color: "#16A34A",
    fontSize: 18,
    fontWeight: "bold",
  },

  historyStatus: {
    color: "#16A34A",
    fontSize: 12,
    marginTop: 5,
  },

// =========================
// FOOTER
// =========================

footer: {
  position: "absolute",

  left: 16,
  right: 16,
  bottom: 16,

  height: 82,

  backgroundColor: "#FFFFFF",

  borderRadius: 42,

  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",

  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowRadius: 15,
  shadowOffset: {
    width: 0,
    height: -4,
  },

  elevation: 20,
},

footerItem: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},

footerText: {
  marginTop: 5,
  color: "#64748B",
  fontSize: 11,
  fontWeight: "600",
},

footerActive: {
  marginTop: 5,
  color: "#FF8C00",
  fontSize: 11,
  fontWeight: "700",
},

footerCenter: {
  position: "absolute",

  alignSelf: "center",

  top: 15,

  width: 10,
  height: 10,

  justifyContent: "center",
  alignItems: "center",

  zIndex: 999,
  elevation: 30,
},

footerMascot: {
  width: 180,
  height: 180,

  shadowColor: "#000",
  shadowOpacity: 0.30,
  shadowRadius: 12,
  shadowOffset: {
    width: 10,
    height: 8,
  },

  elevation: 0,
},

});
