import { Formik } from "formik";
import React from "react";

function AppForm({ initialValues, validateSchema, handleSubmit, children }) {
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validateSchema}
    >
      {(handleBlur, hanldeSubmit, values, touched) => ({ children })}
    </Formik>
  );
}

export default AppForm;
