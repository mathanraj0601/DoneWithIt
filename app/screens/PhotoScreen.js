import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import color from "../config/color";

function PhotoScreen(props) {
  return (
    <View style={styles.phoneScreenContainer}>
      <View style={styles.btnContainer}>
        <View style={styles.closeBtn}></View>
        <View style={styles.menubtn}></View>
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  phoneScreenContainer: {
    width: "100%",
    height: "100%",
  },
  btnContainer: {
    position: "absolute",
    top: 60,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  closeBtn: {
    height: 50,
    width: 50,
    backgroundColor: color.primary,
  },
  menubtn: {
    width: 50,
    height: 50,
    backgroundColor: color.secondary,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default PhotoScreen;
