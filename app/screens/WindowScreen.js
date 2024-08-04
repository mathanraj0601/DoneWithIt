import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";
import color from "../config/color";
import AppText from "../components/AppText";
import Button from "../components/Button/Button";

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
        <AppText style={styles.title}> Sell What Ever You d on't Need </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.loginButton}>LOGIN</Button>
        <Button style={styles.registerButton}>REGISTER</Button>
      </View>
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
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  loginButton: {
    width: "100%",
    backgroundColor: color.secondary,
  },
  registerButton: {
    width: "100%",
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
  title: {
    fontWeight: "800",
    fontSize: 24,
    marginVertical: 10,
  },
});

export default WindowScreen;
