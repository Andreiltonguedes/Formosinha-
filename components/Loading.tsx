import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import { router } from "expo-router";
import { styles } from "../styles/login.styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin() {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    // Aqui será feita a comunicação com o backend futuramente
    console.log("Email:", email);
    console.log("Senha:", senha);

    router.replace("/cashback");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.content}
      >
        <Text style={styles.logo}>💰 CashBF</Text>

        <Text style={styles.subTitle}>
          Entre para acessar sua carteira de cashback.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="CPF ou E-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={fazerLogin}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/cadastro")}
        >
          <Text style={styles.link}>
            Criar uma conta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/recuperarSenha")}
        >
          <Text style={styles.link}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}