import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import color from "../config/color";
import Screen from "../components/Screen";
import OptionItemSeperator from "../components/seperators/OptionItemSeperator";
import Icon from "../components/Icon";

const options = [
  {
    id: 1,
    title: "My Listings",
    icon: "email",
    backgroundColor: color.primary,
  },
  {
    id: 1,
    title: "My Messages",
    icon: "email",
    backgroundColor: color.secondary,
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.profile}>
        <ListItem
          image={require("../assets/splash.png")}
          title={"Maddy"}
          subtitle={"maddy@email.com"}
        />
      </View>

      <View style={styles.options}>
        <FlatList
          data={options}
          renderItem={({ item }) => (
            <ListItem
              ImageComponent={
                <Icon
                  backgroundColor={item.backgroundColor}
                  name={item.icon}
                  size={50}
                />
              }
              title={item.title}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <OptionItemSeperator />}
        />
      </View>
      <View>
        <ListItem
          title={"Logout"}
          ImageComponent={
            <Icon name={"logout"} size={50} backgroundColor={"#ffe66d"} />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: color.lightGrey,
  },
  profile: {
    marginBottom: 30,
  },
  options: {
    marginBottom: 20,
  },
});

export default AccountScreen;
