import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../config/color";
import { TouchableOpacity } from "react-native-gesture-handler";
function ListItemDeleteIcon(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.deleteContainer}>
        <MaterialCommunityIcons name="delete" size={30} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  deleteContainer: {
    width: 50,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.danger,
  },
});
export default ListItemDeleteIcon;
