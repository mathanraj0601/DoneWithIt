import React, { useState } from "react";
import { Image, StyleSheet, TextInput } from "react-native";

import DefaultStyles from "../config/style";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button/Button";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.image} />
      <AppTextInput
        iconName={"email"}
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={"Email Address"}
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoComplete="email"
      />

      <AppTextInput
        secureTextEntry
        iconName={"lock"}
        textContentType="password"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={"Password"}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TextInput />
      <Button
        style={styles.loginBtn}
        onPress={() => console.log(email, password)}
      >
        Login{" "}
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
    justifyContent: "center",
  },
  image: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginBottom: 20,
  },
  loginBtn: {
    backgroundColor: DefaultStyles.color.primary,
    color: DefaultStyles.color.dark,
  },
});

export default LoginScreen;
