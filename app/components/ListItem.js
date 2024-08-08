import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import color from "../config/color";

function ListItem(props) {
  return (
    <View style={[styles.listItemContainer, props.style]}>
      {props.image && (
        <Image style={styles.image} resizeMode="cover" source={props.image} />
      )}
      {props.ImageComponent}
      <View style={styles.textContainer}>
        {props.title && <AppText style={styles.title}>{props.title}</AppText>}
        {props.subTitle && (
          <AppText style={styles.subTitle}>{props.subtitle}</AppText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    height: "auto",
    flexDirection: "row",
    padding: 10,
    backgroundColor: color.light,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  textContainer: {
    paddingHorizontal: 10,
    justifyContent: "center",
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
