import React from "react";
import { DatePickerComponent as DatePicker } from "./DatePickerComponent";

const formatDate = (date) => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000);
};

export const FormComponent = ({ dates, setDates, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <div className="form__item">
        <p>Дата начала выборки</p>
        <DatePicker
          selected={dates.startDate}
          onChange={(date) => {
            setDates({ ...dates, startDate: date ? formatDate(date) : null });
          }}
        />
      </div>
      <div className="form__item">
        <p>Дата конца выборки</p>
        <DatePicker
          selected={dates.endDate}
          onChange={(date) => {
            setDates({ ...dates, endDate: date ? formatDate(date) : null });
          }}
        />
      </div>
      <button className="form__button " type="submit">
        Отправить
      </button>
    </form>
  );
};
