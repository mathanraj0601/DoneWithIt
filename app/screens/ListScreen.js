import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import color from "../config/color";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/seperators/ListItemSeperator";

function ListScreen() {
  const data = [
    {
      id: 1,
      name: "maddy",
      description: "customer1",
      image: require("../assets/splash.png"),
    },
    {
      id: 2,
      name: "yaadm",
      description: "customer2",
      image: require("../assets/icon.png"),
    },
  ];

  return (
    <Screen style={styles.view}>
      <ListItem
        style={styles.card}
        image={require("../assets/adaptive-icon.png")}
        title="Chair Vendor"
        subtitle="$100"
      />

      <Card
        style={styles.card}
        image={require("../assets/chair.jpg")}
        title="chair"
        subtitle="$100"
      />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.name}
            subtitle={item.description}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <ListItemSeperator />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: color.light,
    // marginTop: 50,
  },
  card: {
    margin: 10,
  },
});
export default ListScreen;
