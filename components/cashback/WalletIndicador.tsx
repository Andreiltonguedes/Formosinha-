import React from "react";
import { View } from "react-native";

import { styles } from "../../styles/balanceCard.styles";

interface Props {
  total: number;
  active: number;
}

export default function WalletIndicator({
  total,
  active,
}: Props) {
  return (
    <View style={styles.indicatorContainer}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            index === active && styles.indicatorActive,
          ]}
        />
      ))}
    </View>
  );
}