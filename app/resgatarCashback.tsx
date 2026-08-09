import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { styles } from "../styles/resgatarCashback.styles";

export default function ResgatarCashback() {

  const [valor, setValor] = useState("");

  function resgatar() {

    if (!valor) {
      Alert.alert("Informe um valor.");
      return;
    }

    Alert.alert(
      "Sucesso",
      `Solicitação de resgate de R$ ${valor} enviada.`
    );
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Resgatar Cashback
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Saldo Disponível
        </Text>

        <Text style={styles.saldo}>
          R$ 58,75
        </Text>

      </View>

      <TextInput
        style={styles.input}
        placeholder="Valor para resgate"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={resgatar}
      >
        <Text style={styles.buttonText}>
          Resgatar
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}