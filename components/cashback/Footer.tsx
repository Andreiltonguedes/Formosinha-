import React, { useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../styles/cashback.Styles";

export default function Footer() {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
  const loop = Animated.loop(
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 2500,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 2500,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ])
  );

  loop.start();

  return () => loop.stop();
  }, []);

 const translateX = animation.interpolate({
  inputRange: [0, 0.25, 0.5, 0.75, 1],
  outputRange: [-10, 18, 8, -18, -10],
});

const translateY = animation.interpolate({
  inputRange: [0, 0.25, 0.5, 0.75, 1],
  outputRange: [8, -18, -6, 15, 8],
  });
const scale = animation.interpolate({
  inputRange: [0, 0.5, 1],
  outputRange: [1, 1.03, 1],
});
  const rotate = animation.interpolate({
  inputRange: [0, 0.15, 0.30, 0.50, 0.70, 0.85, 1],
  outputRange: [
    "-12deg",
    "-5deg",
    "6deg",
    "12deg",
    "4deg",
    "-8deg",
    "-12deg",
  ],

    
  });

  return (
    <View style={styles.footer}>

      {/* Início */}
      <TouchableOpacity style={styles.footerItem}>
        <MaterialCommunityIcons
          name="home"
          size={22}
          color="#FF8C00"
        />
        <Text style={styles.footerActive}>
          Início
        </Text>
      </TouchableOpacity>

      {/* Cashback */}
      <TouchableOpacity style={styles.footerItem}>
        <MaterialCommunityIcons
          name="cash-fast"
          size={22}
          color="#64748B"
        />
        <Text style={styles.footerText}>
          Cashback
        </Text>
      </TouchableOpacity>

      {/* Mascote */}
      <TouchableOpacity
        style={styles.footerCenter}
        activeOpacity={0.9}
      >
        <Animated.Image
          source={require("../../assets/images/formosinha-avatar.png")}
          resizeMode="contain"
          style={[
            styles.footerMascot,
            {
              transform: [
                { translateX },
                { translateY },
                { rotate },
                {scale}
              ],
            },
          ]}
        />
      </TouchableOpacity>

      {/* Prêmios */}
      <TouchableOpacity style={styles.footerItem}>
        <MaterialCommunityIcons
          name="gift"
          size={22}
          color="#64748B"
        />
        <Text style={styles.footerText}>
          Prêmios
        </Text>
      </TouchableOpacity>

      {/* Perfil */}
      <TouchableOpacity style={styles.footerItem}>
        <MaterialCommunityIcons
          name="account"
          size={22}
          color="#64748B"
        />
        <Text style={styles.footerText}>
          Perfil
        </Text>
      </TouchableOpacity>

    </View>
  );
}