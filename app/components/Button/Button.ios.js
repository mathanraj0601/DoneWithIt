import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import color from "../../config/color";

function Button(props) {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: color.dark,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
    shadowColor: color.dark,
    shadowOffset: 4,
    shadowRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: color.light,
    letterSpacing: 0.7,
  },
});
export default Button;
