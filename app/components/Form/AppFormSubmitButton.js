import { useFormikContext } from "formik";
import React from "react";
import Button from "../Button/Button";

function AppFormSubmitButton({ styles, children }) {
  const { handleSubmit } = useFormikContext();
  return (
    <Button style={styles} onPress={handleSubmit}>
      {children}
    </Button>
  );
}

export default AppFormSubmitButton;
