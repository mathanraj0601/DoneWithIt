import { Formik } from "formik";
import React from "react";

function AppForm({ initialValues, validateSchema, handleSubmit, children }) {
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validateSchema}
    >
      {(handleSubmit, errors, setFieldTouched, handleChange, touched, values) =>
        children
      }
    </Formik>
  );
}

export default AppForm;
