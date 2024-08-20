import React from "react";
import { Image, StyleSheet } from "react-native";
import DefaultStyles from "../config/style";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorComponent from "../components/ErrorComponent";

function LoginScreen(props) {
  const handleSubmit = (data) => {
    setSubmitting(false);
    console.log(data);
  };

  const validateSchema = Yup.object().shape({
    email: Yup.string().email().label("Email").required(),
    password: Yup.string().min(4).label("Password").required(),
  });
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.image} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validateSchema}
      >
        {({
          handleSubmit,
          errors,
          setFieldTouched,
          handleChange,
          touched,
          values,
        }) => (
          <>
            <AppTextInput
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder={"Email Address"}
              iconName={"email"}
              autoComplete="email"
              value={values["email"]}
              // onBlur={() => setFieldTouched("email", false)}
              onChangeText={handleChange("email")}
            />

            <ErrorComponent touched={touched["email"]}>
              {errors.email}
            </ErrorComponent>

            <AppTextInput
              secureTextEntry
              iconName={"lock"}
              textContentType="password"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder={"Password"}
              value={values["password"]}
              // onBlur={() => setFieldTouched("password", false)}
              onChangeText={handleChange("password")}
            />

            <ErrorComponent touched={touched["password"]}>
              {errors.password}
            </ErrorComponent>

            <Button style={styles.loginBtn} onPress={handleSubmit}>
              Login
            </Button>
          </>
        )}
      </Formik>
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
