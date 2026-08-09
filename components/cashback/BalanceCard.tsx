import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

import WalletCard from "./WalletCard";
import WalletIndicator from "./WalletIndicador";

const { width } = Dimensions.get("window");

// largura do card
const CARD_WIDTH = width * 0.9;

// espaço entre cards
const SPACING = 16;

const wallets = [
  {
    id: 1,
    nome: "Mercado",
    saldo: 18.5,
    cashback: "2%",
    pontos: 420,
    cor1: "#16A34A",
    cor2: "#15803D",
    icone: "cart",
  },
  {
    id: 2,
    nome: "Padaria",
    saldo: 10.2,
    cashback: "5%",
    pontos: 220,
    cor1: "#F97316",
    cor2: "#EA580C",
    icone: "bread-slice",
  },
  {
    id: 3,
    nome: "Farmácia",
    saldo: 8.75,
    cashback: "3%",
    pontos: 180,
    cor1: "#2563EB",
    cor2: "#1D4ED8",
    icone: "pill",
  },
  {
    id: 4,
    nome: "Posto",
    saldo: 15,
    cashback: "1,5%",
    pontos: 300,
    cor1: "#DC2626",
    cor2: "#B91C1C",
    icone: "gas-station",
  },
  {
    id: 5,
    nome: "Restaurante",
    saldo: 6.3,
    cashback: "4%",
    pontos: 140,
    cor1: "#9333EA",
    cor2: "#7E22CE",
    icone: "silverware-fork-knife",
  },
];

export default function BalanceCarousel() {
  const flatListRef = useRef<FlatList>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  function handleScroll(
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) {
    const index = Math.round(
      event.nativeEvent.contentOffset.x /
        (CARD_WIDTH + SPACING)
    );

    setActiveIndex(index);
  }

  return (
    <View>

      <FlatList
        ref={flatListRef}
        horizontal
        data={wallets}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}

        snapToInterval={CARD_WIDTH + SPACING}
        snapToAlignment="center"
        decelerationRate="fast"

        onMomentumScrollEnd={handleScroll}

        contentContainerStyle={{
          paddingHorizontal: 20,
        }}

        ItemSeparatorComponent={() => (
          <View style={{ width: SPACING }} />
        )}

        renderItem={({ item }) => (
          <View
            style={{
              width: CARD_WIDTH,
            }}
          >
            <WalletCard
              nome={item.nome}
              saldo={item.saldo}
              cashback={item.cashback}
              pontos={item.pontos}
              cor1={item.cor1}
              cor2={item.cor2}
              icone={item.icone}
            />
          </View>
        )}
      />

      <WalletIndicator
        total={wallets.length}
        active={activeIndex}
      />

    </View>
  );
}