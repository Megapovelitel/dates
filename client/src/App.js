import "./App.scss";
import React, { useState } from "react";
import useApi from "./hooks/useApi";
import { FormComponent as Form } from "./components/FormComponent";
import getDataBetweenDates from "./services/dates.service";
import ChartComponent from "./components/ChartComponent";

function App() {
  const [dates, setDates] = useState({ startDate: null, endDate: null });
  const [response, trigger] = useApi(getDataBetweenDates);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { startDate, endDate } = dates
    if (startDate >= endDate || (!startDate || !endDate)) return;

    trigger(dates);
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <Form dates={dates} setDates={setDates} onSubmit={onSubmit} />
        <ChartComponent data={response.result ? response.result : null} />
      </div>
    </div>
  );
}

export default App;
