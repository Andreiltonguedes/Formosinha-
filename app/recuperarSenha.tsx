import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import { router } from "expo-router";
import { styles } from "../styles/recuperarSenha.styles";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");

  function recuperarSenha() {
    if (!email) {
      Alert.alert("Atenção", "Informe seu CPF ou e-mail.");
      return;
    }

    // Futuramente chamará a API
    Alert.alert(
      "Código enviado",
      "Se os dados estiverem corretos, você receberá um código para redefinir sua senha."
    );

    router.replace("/login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Text style={styles.logo}>💰 CashBF</Text>

        <Text style={styles.title}>
          Recuperar Senha
        </Text>

        <Text style={styles.description}>
          Digite seu CPF ou e-mail cadastrado para receber as instruções de recuperação.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="CPF ou E-mail"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={recuperarSenha}
        >
          <Text style={styles.buttonText}>
            Enviar Código
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Text style={styles.link}>
            Voltar para o Login
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}