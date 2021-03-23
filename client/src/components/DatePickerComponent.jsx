import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerComponent = (props) => {
  return <DatePicker dateFormat="yyyy-MM-dd" utcOffset={0} {...props} />;
};
