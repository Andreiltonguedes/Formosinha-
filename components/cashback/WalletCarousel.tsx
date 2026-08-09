import React, { useState } from "react";
import { View, Dimensions } from "react-native";

import Carousel from "react-native-reanimated-carousel";

import WalletCard from "./WalletCard";
import WalletIndicator from "./WalletIndicador";

const { width } = Dimensions.get("window");

const wallets = [
  {
    id: 1,
    nome: "Mercado",
    saldo: 18.5,
    pontos: 420,
    cashback: "2%",
    cor1: "#16A34A",
    cor2: "#22C55E",
    icone: "cart",
  },
  {
    id: 2,
    nome: "Padaria",
    saldo: 8.4,
    pontos: 500,
    cashback: "5%",
    cor1: "#F97316",
    cor2: "#FB923C",
    icone: "bread-slice",
  },
  {
    id: 3,
    nome: "Farmácia",
    saldo: 12.7,
    pontos: 180,
    cashback: "3%",
    cor1: "#2563EB",
    cor2: "#3B82F6",
    icone: "pill",
  },
  {
    id: 4,
    nome: "Posto",
    saldo: 6.2,
    pontos: 320,
    cashback: "1,5%",
    cor1: "#DC2626",
    cor2: "#EF4444",
    icone: "gas-station",
  },
];
export default function WalletCarousel() {

  const [index, setIndex] = useState(0);

  return (

    <View>

      <Carousel
        loop={false}
        width={width}
        height={255}
        data={wallets}
                mode="parallax"

        modeConfig={{
          parallaxScrollingScale: 0.90,
          parallaxScrollingOffset: 55,
          parallaxAdjacentItemScale: 0.80,
        }}

        onSnapToItem={(i) => setIndex(i)}
                renderItem={({ item }) => (

          <View
            style={{
              alignItems: "center",
            }}
          >

            <WalletCard
              nome={item.nome}
              saldo={item.saldo}
              pontos={item.pontos}
              cashback={item.cashback}
              cor1={item.cor1}
              cor2={item.cor2}
              icone={item.icone}
            />

          </View>

        )}
      />

      <WalletIndicator
        total={wallets.length}
        active={index}
      />

    </View>

  );

}