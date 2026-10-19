import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { UsuarioService } from "../services/usuario";
import { styles } from "../styles/perfil.styles";

const USUARIO_ID = 1;

export default function Perfil() {
  const [usuario, setUsuario] = useState<any>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarUsuario() {
      try {
        const dados = await UsuarioService.buscar(USUARIO_ID);
        const usuarioAtual = Array.isArray(dados) ? dados[0] : dados;
        setUsuario(usuarioAtual || null);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      } finally {
        setCarregando(false);
      }
    }

    carregarUsuario();
  }, []);

  if (carregando) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#FF8C00" />
      </SafeAreaView>
    );
  }

  if (!usuario) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.nome}>Usuário não encontrado</Text>
      </SafeAreaView>
    );
  }

  const iniciais = usuario.nome
    ?.split(" ")
    .map((parte: string) => parte[0])
    .slice(0, 2)
    .join("")
    .toUpperCase() || "US";

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {iniciais}
        </Text>
      </View>

      <Text style={styles.nome}>
        {usuario.nome}
      </Text>

      <View style={styles.card}>
        <Text>CPF: {usuario.cpf}</Text>
        <Text>Email: {usuario.email}</Text>
        <Text>Telefone: {usuario.telefone}</Text>
        <Text>Saldo Cashback: R$ {Number(usuario.saldoCashback || 0).toFixed(2)}</Text>
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