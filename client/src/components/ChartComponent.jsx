import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

export default function ChartComponent({ data }) {
  const [graphData, setGraphData] = useState({
    categories: [],
    line: [],
    "line-2": [],
  });

  useEffect(() => {
    if (data) {
      setGraphData({
        categories: data.map((i) => i.date),
        line: data.map((i) => i.value),
        "line-2": data.map((i) => i.value2),
      });
    }
  }, [data]);

  const options = {
    chart: {
      type: "line",
    },
    xaxis: {
      categories: graphData.categories,
    },
  };

  const series = [
    {
      name: "line 1",
      data: graphData.line,
    },
    {
      name: "line 2",
      data: graphData["line-2"],
    },
  ];

  return <Chart className="chart" options={options} series={series} type="line" width="100%" />;
}
