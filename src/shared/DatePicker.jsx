import React from "react";
import { useField, useFormikContext } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker = ({...props}) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <ReactDatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
      className="date-picker"
    />
  );
};
