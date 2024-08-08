import React from "react";
import { StyleSheet, View } from "react-native";
import color from "../../config/color";

function OptionItemSeperator() {
  return <View style={styles.seperator}></View>;
}

const styles = StyleSheet.create({
  seperator: {
    borderBottomColor: color.lightGrey,
    borderBottomWidth: 1,
  },
});
export default OptionItemSeperator;
