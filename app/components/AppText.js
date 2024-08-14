import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import color from "../config/color";
import defaultStyles from "../config/style";

function AppText(props) {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: defaultStyles.text,
});

export default AppText;
