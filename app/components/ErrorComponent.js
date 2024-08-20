import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import DefaultStyles from "../config/style";

function ErrorComponent({ children, touched }) {
  console.log(touched, children);
  if (!touched || !children) return null;
  return (
    <View>
      <AppText style={styles.text}>{children}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: DefaultStyles.color.danger,
  },
});

export default ErrorComponent;
