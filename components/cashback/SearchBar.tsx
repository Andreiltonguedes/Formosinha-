import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../styles/cashback.Styles";

interface SearchBarProps {
  pesquisa: string;
  setPesquisa: (texto: string) => void;
}

export default function SearchBar({
  pesquisa,
  setPesquisa,
}: SearchBarProps) {
  return (
    <View style={styles.searchWrapper}>

      <View style={styles.searchContainer}>

        <MaterialCommunityIcons
          name="magnify"
          size={22}
          color="#94A3B8"
        />

        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar empresa..."
          placeholderTextColor="#94A3B8"
          value={pesquisa}
          onChangeText={setPesquisa}
        />

      </View>

      <TouchableOpacity style={styles.filterButton}>

        <MaterialCommunityIcons
          name="tune-variant"
          size={22}
          color="#FFF"
        />

      </TouchableOpacity>

      <TouchableOpacity style={styles.locationButton}>

        <MaterialCommunityIcons
          name="map-marker-outline"
          size={22}
          color="#FF8C00"
        />

      </TouchableOpacity>

    </View>
  );
}