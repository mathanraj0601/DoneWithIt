import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import ErrorComponent from "../ErrorComponent";

function AppFormPicker({ name }) {
  const { values, touched, handleChange, handleBlur, errors } =
    useFormikContext();
  return (
    <>
      <AppPicker onSelectItem={handleChange} selectedItem={values[name]} />;
      <ErrorComponent touched={touched[name]}>{errors[name]}</ErrorComponent>
    </>
  );
}

export default AppFormPicker;
