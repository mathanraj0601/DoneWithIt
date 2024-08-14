import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../config/color";
import defaultStyles from "../config/style";

function AppTextInput({ iconName, placeholder, style, ...otherProps }) {
  return (
    <View style={[styles.appTextContainer, style]}>
      {iconName && (
        <MaterialCommunityIcons name={iconName} size={20} style={styles.icon} />
      )}
      <TextInput
        style={styles.text}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appTextContainer: {
    flexDirection: "row",
    height: 50,
    rowGap: 10,
    borderRadius: 5,
    backgroundColor: color.lightGrey,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  icon: {
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  text: defaultStyles.text,
});

export default AppTextInput;
