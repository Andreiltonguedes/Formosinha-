import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { styles } from "../styles/perfil.styles";

export default function Perfil() {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          AG
        </Text>
      </View>

      <Text style={styles.nome}>
        Andreilton Guedes
      </Text>

      <View style={styles.card}>

        <Text>CPF: 000.000.000-00</Text>

        <Text>Email: usuario@email.com</Text>

        <Text>Telefone: (84) 99999-9999</Text>

        <Text>Saldo Cashback: R$ 58,75</Text>

      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Editar Perfil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSair}>
        <Text style={styles.buttonText}>
          Sair
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}