import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FF8C00",
    textAlign: "center",
    marginBottom: 10,
  },

  subTitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },

  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
    fontSize: 16,
    marginBottom: 20,
    color: "#000",
  },

  button: {
    backgroundColor: "#FF8C00",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  link: {
    textAlign: "center",
    color: "#FF8C00",
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
  },
});