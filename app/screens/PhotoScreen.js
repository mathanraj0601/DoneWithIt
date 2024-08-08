import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import color from "../config/color";
import AntDesign from "@expo/vector-icons/AntDesign";

function PhotoScreen(props) {
  return (
    <View style={styles.phoneScreenContainer}>
      <View style={styles.btnContainer}>
        <AntDesign name="close" size={30} />
        <AntDesign name="delete" size={30} />
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
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default PhotoScreen;
