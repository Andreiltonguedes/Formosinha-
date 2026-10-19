import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "../../styles/balanceCard.styles";

interface BalanceCardProps {
  saldo: number;
  cashbackMes: number;
  pontos: number;
}

export default function BalanceCard({
  saldo,
  cashbackMes,
  pontos,
}: BalanceCardProps) {
  const metaPontos = 500;
  const progresso = Math.min((pontos / metaPontos) * 100, 100);
  const faltam = Math.max(0, metaPontos - pontos);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.walletIcon}>
          <MaterialCommunityIcons
            name="wallet-outline"
            size={30}
            color="#FFF"
          />
        </View>

        <View>
          <Text style={styles.label}>Saldo disponível</Text>
          <Text style={styles.value}>R$ {saldo.toFixed(2)}</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>Seu cashback acumulado este mês</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <MaterialCommunityIcons name="cash-fast" size={24} color="#FF8C00" />
          <Text style={styles.infoTitle}>Cashback</Text>
          <Text style={styles.infoValue}>R$ {cashbackMes.toFixed(2)}</Text>
        </View>

        <View style={styles.infoCard}>
          <MaterialCommunityIcons name="star" size={24} color="#FF8C00" />
          <Text style={styles.infoTitle}>Pontos</Text>
          <Text style={styles.infoValue}>{pontos}</Text>
        </View>
      </View>

      <View style={styles.ruleBox}>
        <MaterialCommunityIcons name="progress-check" size={22} color="#FFF" />
        <Text style={styles.ruleText}>
          Você está em <Text style={styles.bold}>{progresso.toFixed(0)}%</Text> da
          meta de {metaPontos} pontos.
        </Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.primaryButton}>
          <MaterialCommunityIcons name="cash-fast" size={20} color="#FF8C00" />
          <Text style={styles.primaryButtonText}>Resgatar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <MaterialCommunityIcons name="arrow-right" size={20} color="#FFF" />
          <Text style={styles.secondaryButtonText}>Ver mais</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.expandButton}>
        <Text style={styles.expandText}>Faltam {faltam} pontos</Text>
        <MaterialCommunityIcons name="chevron-down" size={22} color="#FFF" />
      </View>
    </View>
  );
}