import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../styles/cashback.Styles";

const categorias = [
  {
    id: 1,
    nome: "Mercado",
    icone: "cart",
    cashback: "2%",
  },
  {
    id: 2,
    nome: "Padaria",
    icone: "bread-slice",
    cashback: "5%",
  },
  {
    id: 3,
    nome: "Farmácia",
    icone: "pill",
    cashback: "3%",
  },
  {
    id: 4,
    nome: "Posto",
    icone: "gas-station",
    cashback: "1,5%",
  },
  {
    id: 5,
    nome: "Restaurante",
    icone: "silverware-fork-knife",
    cashback: "4%",
  },
  {
    id: 6,
    nome: "Hotel",
    icone: "bed",
    cashback: "6%",
  },
];

export default function Categories() {
  return (
    <View>

      <Text style={styles.section}>
        Categorias
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categorias.map((item) => (

          <TouchableOpacity
            key={item.id}
            style={styles.categoryCard}
            activeOpacity={0.8}
          >

            <View style={styles.categoryIcon}>

              <MaterialCommunityIcons
                name={item.icone as any}
                size={30}
                color="#FF8C00"
              />

            </View>

            <Text style={styles.categoryTitle}>
              {item.nome}
            </Text>

            <View style={styles.percentBadge}>

              <Text style={styles.categoryPercent}>
                {item.cashback}
              </Text>

            </View>

          </TouchableOpacity>

        ))}
      </ScrollView>

    </View>
  );
}