import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
    padding: 20,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FF8C00",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  avatarText: {
    color: "#FFF",
    fontSize: 42,
    fontWeight: "bold",
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#333",
  },

  card: {
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 15,
    padding: 20,
    marginTop: 30,
    elevation: 3,
    gap: 12,
  },

  button: {
    width: "100%",
    backgroundColor: "#FF8C00",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  buttonSair: {
    width: "100%",
    backgroundColor: "#D32F2F",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});