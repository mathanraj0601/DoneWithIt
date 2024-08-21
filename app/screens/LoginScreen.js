import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import DefaultStyles from "../config/style";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorComponent from "../components/ErrorComponent";
import AppFormPicker from "../components/Form/AppFormPicker";

function LoginScreen(props) {
  const handleSubmit = (data, setSubmitting) => {
    setSubmitting(false);
  };

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

  const validateSchema = Yup.object().shape({
    email: Yup.string().email().label("Email").required(),
    password: Yup.string().min(4).label("Password").required(),
    category: Yup.object().required(),
  });
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.image} />
      <Formik
        initialValues={{ email: "", password: "", category: null }}
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
              onBlur={() => setFieldTouched("email", true)}
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
              onBlur={() => setFieldTouched("password", true)}
              onChangeText={handleChange("password")}
            />

            <ErrorComponent touched={touched["password"]}>
              {errors.password}
            </ErrorComponent>

            <AppFormPicker
              iconName={"menu"}
              name={"category"}
              data={category}
            />

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
