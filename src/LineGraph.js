import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const buildChartData = (data, casesType) => {
  var chartData = [["Date", "Cases"]];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      chartData.push([date, data[casesType][date] - lastDataPoint]);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

function LineGraph({ casesType }) {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=90")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let chartData = buildChartData(data, casesType);

          setData(chartData);
        });
    };

    fetchData();
  }, [casesType]);

  return (
    <div>
      <Chart
        chartType="Line"
        data={data}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
}

export default LineGraph;
