import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../styles/cashback.Styles";

interface Props {
  nome: string;
  categoria: string;
  cashback: string;
}

export default function EmpresaCard({
  nome,
  categoria,
  cashback,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.cardEmpresa}
      activeOpacity={0.8}
    >
      <View style={styles.empresaInfo}>

        <View style={styles.iconEmpresa}>

          <MaterialCommunityIcons
            name="store"
            size={28}
            color="#FF8C00"
          />

        </View>

        <View>

          <Text style={styles.nomeEmpresa}>
            {nome}
          </Text>

          <Text style={styles.categoria}>
            {categoria}
          </Text>

          <View style={styles.ratingRow}>

            <MaterialCommunityIcons
              name="star"
              size={16}
              color="#FACC15"
            />

            <Text style={styles.ratingText}>
              4.9 • Parceiro Premium
            </Text>

          </View>

        </View>

      </View>

      <View style={styles.rightContent}>

        <View style={styles.cashbackBadge}>

          <Text style={styles.cashbackBadgeText}>
            {cashback}
          </Text>

        </View>

        <TouchableOpacity style={styles.favoriteButton}>

          <MaterialCommunityIcons
            name="heart-outline"
            size={22}
            color="#FF8C00"
          />

        </TouchableOpacity>

      </View>

    </TouchableOpacity>
  );
}