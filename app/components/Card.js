import React from "react";
import { View, Image, StyleSheet, Platform } from "react-native";
import AppText from "./AppText";
import color from "../config/color";

function Card(props) {
  return (
    <View style={[styles.cardContainer, props.style]}>
      <Image style={styles.image} resizeMode="cover" source={props.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.subTitle}>{props.subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "700",
    paddingTop: 5,
    color: color.secondary,
  },
  ...Platform.select({
    android: {
      cardContainer: {
        height: "auto",
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: color.light,
        elevation: 5,
      },
    },
    ios: {
      cardContainer: {
        height: "auto",
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: color.light,
        shadowColor: color.dark,
        shadowOffset: 5,
        shadowRadius: 10,
      },
    },
  }),
});

export default Card;
