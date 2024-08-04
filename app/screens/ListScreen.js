import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../components/Card";
import color from "../config/color";
import ListItem from "../components/ListItem";

function ListScreen() {
  return (
    <View style={styles.view}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: color.light,
    marginTop: 50,
  },
  card: {
    margin: 10,
  },
});
export default ListScreen;
