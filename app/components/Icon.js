import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/color";
import { View } from "react-native";
function Icon({
  size,
  width,
  height,
  backgroundColor,
  name,
  color = colors.light,
}) {
  return (
    <View
      style={{
        borderRadius: size / 2,
        width: size,
        backgroundColor: backgroundColor,
        height: size,
        color: color,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={color} />
    </View>
  );
}

export default Icon;
