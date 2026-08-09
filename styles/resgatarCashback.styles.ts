import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF8C00",
    textAlign: "center",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 25,
    marginBottom: 25,
    elevation: 3,
    alignItems: "center",
  },

  label: {
    fontSize: 16,
    color: "#666",
  },

  saldo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#2E7D32",
    marginTop: 10,
  },

  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    height: 55,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#FF8C00",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});