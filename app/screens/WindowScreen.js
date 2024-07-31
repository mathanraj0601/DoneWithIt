import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";
import color from "../config/color";

function WindowScreen() {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../assets/logo-red.png")}
        />
        <Text numberOfLines={1}> Sell what ever you don't need </Text>
      </View>
      <View style={styles.registerButton}></View>
      <View style={styles.loginButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: color.secondary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: color.primary,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
});

export default WindowScreen;
