import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import color from "../config/color";

function ListItem(props) {
  return (
    <View style={styles.listItemContainer}>
      <Image style={styles.image} resizeMode="cover" source={props.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.subTitle}>{props.subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    height: "auto",
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 14,
    paddingTop: 5,
    color: color.grey,
    fontWeight: "600",
  },
});

export default ListItem;
