import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import color from "../config/color";

function AppText(props) {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: color.dark,
    fontSize: 12,
    fontFamily: Platform.OS === "android" ? "Roboto" : "San Francisco",
  },
});

export default AppText;
