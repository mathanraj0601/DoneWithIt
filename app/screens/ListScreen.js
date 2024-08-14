import React, { useState } from "react";
import { FlatList, Modal, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import color from "../config/color";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/seperators/ListItemSeperator";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import AppText from "../components/AppText";
import { TouchableHighlight } from "react-native-gesture-handler";

function ListScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const deleteItem = (item) => {
    setData((prev) => prev.filter((x) => x.id !== item.id));
  };
  const [data, setData] = useState([
    {
      id: 1,
      name: "Red Chair",
      price: 100,
      image: require("../assets/chair.jpg"),
    },
    {
      id: 2,
      name: "Blue Chair",
      price: 200,
      image: require("../assets/chair.jpg"),
    },
    {
      id: 3,
      name: "yellow Chair",
      price: 200,
      image: require("../assets/chair.jpg"),
    },
    {
      id: 4,
      name: "green Chair",
      price: 200,
      image: require("../assets/chair.jpg"),
    },
  ]);

  const [category, setCategory] = useState([
    {
      id: 1,
      name: "chair",
    },
    {
      id: 2,
      name: "car",
    },
    {
      id: 3,
      name: "lbdasjdasjkdnaskjdnjlm",
    },
  ]);

  const [selection, setSelection] = useState(category[0]);

  return (
    <Screen style={styles.view}>
      {/* <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.name}
            subtitle={"$" + item.price}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <ListItemSeperator margin={10} />}
      /> */}

      <AppTextInput
        iconName="email"
        placeholder={"Enter Email"}
        keyboardType="email-address"
      />
      <AppTextInput placeholder={"Enter Nmae"} keyboardType="numeric" />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem
            image={require("../assets/logo-red.png")}
            title="Hello"
            subTitle="Hello World !"
            onPress={() => deleteItem(item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <ListItemSeperator margin={10} />}
        refreshing={refreshing}
        onRefresh={() => {
          setData((prev) => prev.filter((x) => x.id == 1));
          setRefreshing(false);
        }}
      />

      <AppPicker
        text="category"
        iconName="view-list"
        selectedItem={selection}
        onSelectItem={(item) => setSelection(item)}
        data={category}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: color.light,
    // paddingHorizontal: 10,
    flex: 1,
  },
});
export default ListScreen;
