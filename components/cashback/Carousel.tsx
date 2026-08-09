import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
} from "react-native";

const banners = [
  {
    id: 1,
    titulo: "Ganhe Cashback",
    descricao: "Compre no comércio local e receba dinheiro de volta.",
    imagem: require("../../assets/banners/banner1.png"),
  },
  {
    id: 2,
    titulo: "Surfe na Onda do CASHBF",
    descricao: "Economize em cada compra e fortaleça o comércio de Baía Formosa.",
    imagem: require("../../assets/banners/banner2.png"),
  },
  {
    id: 3,
    titulo: "Compre e Ganhe",
    descricao: "Acumule pontos e troque por cashback.",
    imagem: require("../../assets/banners/banner3.jpg"),
  },
];

export default function Carousel() {
  const { width } = useWindowDimensions();

  const bannerWidth = width * 0.9;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate="fast"
        snapToInterval={bannerWidth + 20}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: (width - bannerWidth) / 2,
        }}
      >
        {banners.map((item) => (
          <ImageBackground
            key={item.id}
            source={item.imagem}
            style={[
              styles.banner,
              {
                width: bannerWidth,
              },
            ]}
            imageStyle={styles.image}
          >
            <View style={styles.overlay}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.titulo}</Text>

                <Text style={styles.description}>
                  {item.descricao}
                </Text>
              </View>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      <View style={styles.dots}>
        <View style={[styles.dot, styles.active]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  banner: {
    height: 220,
    marginRight: 20,
    borderRadius: 25,
    overflow: "hidden",
  },

  image: {
    borderRadius: 25,
    resizeMode: "cover",
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.25)",
  },

  textContainer: {
    width: "60%",
  },

  title: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 8,

    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 6,
  },

  description: {
    color: "#FFF",
    fontSize: 16,
    lineHeight: 22,

    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 4,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 4,
  },

  active: {
    width: 22,
    backgroundColor: "#FF8C00",
  },
});