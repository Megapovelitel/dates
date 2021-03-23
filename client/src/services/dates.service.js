import axios from "axios";

//UTILITY

const formatDates = (dates) => {
  return {
    startDate: dates.startDate.toISOString().substring(0, 10),
    endDate: dates.endDate.toISOString().substring(0, 10),
  };
};

const getDataBetweenDates = (dates) => {
  const _dates = formatDates(dates);
  const url = `http://localhost:8080/data/?from=${_dates.startDate}&to=${_dates.endDate}`;
  return axios.get(url);
};

export default getDataBetweenDates;
