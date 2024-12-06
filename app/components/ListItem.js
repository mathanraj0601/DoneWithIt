import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import AppText from "./AppText";
import color from "../config/color";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import ListItemDeleteIcon from "./ListItemDeleteIcon";
// import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

function ListItem(props) {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => (
          <ListItemDeleteIcon onPress={props.onPress} />
        )}
      >
        <View style={[styles.listItemContainer, props.style]}>
          {props.image && (
            <Image
              style={styles.image}
              resizeMode="cover"
              source={props.image}
            />
          )}
          {props.ImageComponent}
          <View style={styles.textContainer}>
            {props.title && (
              <AppText style={styles.title}>{props.title}</AppText>
            )}
            {props.subTitle && (
              <AppText style={styles.subTitle}>{props.subTitle}</AppText>
            )}
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    height: "auto",
    flexDirection: "row",
    padding: 10,
    backgroundColor: color.light,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  textContainer: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 14,
    paddingTop: 5,
    color: color.grey,
    fontWeight: "600",
  },
});

export default ListItem;
