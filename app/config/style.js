import { Platform } from "react-native";

const color = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  light: "white",
  dark: "black",
  grey: "#808080",
  lightGrey: "#F2F2F2",
  danger: "#ff5252",
};

export default {
  text: {
    color: color.grey, // Now you can access color.lightGrey here
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "San Francisco",
  },
  color: color, // You can also export color as part of the default object
};
