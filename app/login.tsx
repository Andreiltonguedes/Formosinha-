import React, { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

import { router } from "expo-router";
import { AuthService } from "../services/auth";
import { styles } from "../styles/login.styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function fazerLogin() {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    try {
      const usuario = await AuthService.login(email, senha);

      if (!usuario) {
        Alert.alert("Erro", "E-mail ou senha inválidos.");
        return;
      }

      Alert.alert("Sucesso", "Login realizado com sucesso!");
      router.replace("/cashback");
    } catch (error: any) {
      Alert.alert("Erro", error?.response?.data?.message || "Não foi possível realizar o login.");
    }
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