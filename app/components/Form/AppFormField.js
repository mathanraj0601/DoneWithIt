import { useFormikContext } from "formik";
import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorComponent from "../ErrorComponent";

function AppFormField({ name, ...Otherprops }) {
  const {
    setFieldTouched,
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...Otherprops}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />

      <ErrorComponent touched={touched[name]}>{errors[name]}</ErrorComponent>
    </>
  );
}

export default AppFormField;
