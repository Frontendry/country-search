import React from "react";
import { connect } from "react-redux";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const Chart = ({ countries }) => {
  const renderCharts = () => {
    const chartData = [];

    // Get applicable data for visualization from countries
    countries.forEach((country) => {
      chartData.push({
        name: country.name,
        population: country.population,
      });
    });
    return (
      <BarChart
        width={800}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="population"
          fill="#8884d8"
          background={{ fill: "#eee" }}
        />
      </BarChart>
    );
  };

  return <div>{countries.length && renderCharts()}</div>;
};

const mapStateToProps = ({ searchedCountries }) => {
  return {
    countries: searchedCountries.countries,
  };
};
export default connect(mapStateToProps)(Chart);
