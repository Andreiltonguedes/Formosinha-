import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "../../styles/Wallet.Styles";

interface Props {
  nome: string;
  saldo: number;
  pontos: number;
  cashback: string;
  cor1: string;
  cor2: string;
  icone: string;
}

export default function WalletCard({
  nome,
  saldo,
  pontos,
  cashback,
  cor1,
  cor2,
  icone,
}: Props) {

  const [mostrarSaldo, setMostrarSaldo] = useState(false);

  const LIMITE = 500;

  const progresso = Math.min((pontos / LIMITE) * 100, 100);

  const podeResgatar = pontos >= LIMITE;

  const faltam = Math.max(0, LIMITE - pontos);

  return (

    <LinearGradient
      colors={[cor1, cor2]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >

      {/* TOPO */}

      <View style={styles.header}>

        <View style={styles.iconContainer}>

          <MaterialCommunityIcons
            name={icone as any}
            size={30}
            color="#FFF"
          />

        </View>

        <View style={styles.cashbackBadge}>

          <Text style={styles.cashbackText}>
            {cashback}
          </Text>

        </View>

      </View>

      <Text style={styles.title}>
        {nome}
      </Text>

      <Text style={styles.subtitle}>
        Carteira CashBF
      </Text>
            {/* SALDO */}

      <View style={styles.balanceContainer}>

        <Text style={styles.balanceLabel}>
          Saldo disponível
        </Text>

        <Text style={styles.balanceValue}>
          {mostrarSaldo
            ? `R$ ${saldo.toFixed(2)}`
            : "••••••"}
        </Text>

        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() =>
            setMostrarSaldo(!mostrarSaldo)
          }
        >

          <MaterialCommunityIcons
            name={
              mostrarSaldo
                ? "eye-off-outline"
                : "eye-outline"
            }
            size={22}
            color="#FFF"
          />

          <Text style={styles.eyeText}>
            {mostrarSaldo
              ? "Ocultar saldo"
              : "Mostrar saldo"}
          </Text>

        </TouchableOpacity>

      </View>

      {/* PONTOS */}

      <View style={styles.pointsContainer}>

        <Text style={styles.pointsNumber}>
          ⭐ {pontos} / 500
        </Text>

        <Text style={styles.pointsLabel}>
          Pontos acumulados
        </Text>

      </View>

      {/* BARRA DE PROGRESSO */}

      <View style={styles.progressBackground}>

        <View
          style={[
            styles.progressFill,
            {
              width: `${progresso}%`,
            },
          ]}
        />

      </View>

      <Text style={styles.progressText}>

        {podeResgatar
          ? "🎉 Cashback liberado para resgate!"
          : `Faltam ${faltam} pontos para liberar seu cashback.`}

      </Text>
            {/* STATUS */}

      <View style={styles.statusContainer}>

        <Text
          style={
            podeResgatar
              ? styles.statusUnlocked
              : styles.statusLocked
          }
        >
          {podeResgatar
            ? "🎉 Cashback liberado!"
            : "🔒 Resgate disponível ao atingir 500 pontos"}
        </Text>

      </View>

      {/* BOTÃO */}

      <TouchableOpacity
        disabled={!podeResgatar}
        style={[
          styles.button,
          podeResgatar
            ? styles.buttonEnabled
            : styles.buttonDisabled,
        ]}
      >

        <MaterialCommunityIcons
          name={
            podeResgatar
              ? "cash-fast"
              : "lock-outline"
          }
          size={22}
          color="#FFF"
        />

        <Text style={styles.buttonText}>
          {podeResgatar
            ? "Resgatar Cashback"
            : "Resgate Bloqueado"}
        </Text>

      </TouchableOpacity>

    </LinearGradient>

  );
}