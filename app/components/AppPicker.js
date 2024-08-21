import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  Text,
} from "react-native";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import defaultStyles from "../config/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItemSeperator from "./seperators/ListItemSeperator";

function AppPicker({
  data,
  iconName,
  text,
  selectedItem,
  onSelectItem,
  style,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsModalOpen(true)}>
        <View style={[styles.appPickerContainer, style]}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.name : text}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            style={styles.iconCaret}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        style={styles.screen}
        visible={isModalOpen}
        animationType="slide"
        onRequestClose={() => setIsModalOpen(false)}
      >
        <Screen style={styles.screen}>
          <FlatList
            style={styles.flatlist}
            data={data}
            renderItem={({ item }) => (
              <PickerItem
                text={item.name}
                onPress={() => {
                  onSelectItem(item);
                  setIsModalOpen(false);
                }}
              />
            )}
            ItemSeparatorComponent={() => <ListItemSeperator margin={10} />}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  appPickerContainer: {
    flexDirection: "row",
    height: 50,
    rowGap: 10,
    borderRadius: 5,
    backgroundColor: defaultStyles.color.lightGrey,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  icon: {
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  iconCaret: {
    alignSelf: "center",
    paddingHorizontal: 5,
    marginLeft: "auto",
  },
  text: { ...defaultStyles.text, alignSelf: "center" },
  screen: {
    backgroundColor: defaultStyles.color.light,
    color: "white",
  },
  flatlist: {
    paddingHorizontal: 10,
  },
});

export default AppPicker;
