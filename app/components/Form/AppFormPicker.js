import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import ErrorComponent from "../ErrorComponent";

function AppFormPicker({ name, ...otherProps }) {
  const { values, touched, setFieldValue, errors } = useFormikContext();
  return (
    <>
      <AppPicker
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        {...otherProps}
        text={name}
      />
      <ErrorComponent touched={touched[name]}>{errors[name]}</ErrorComponent>
    </>
  );
}

export default AppFormPicker;
