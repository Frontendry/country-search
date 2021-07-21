import React from "react";
import { connect } from "react-redux";
import Chart from "react-apexcharts";

const ChartDisplay = ({ countries }) => {
  const renderChart = () => {
    if (countries.length) {
      const chartSeriesData = [];

      const chartXAxisData = [];

      // Populate Essential Plotting Data
      countries.forEach((country) => {
        // Series Data
        chartSeriesData.push(country.population);

        // X Axis Data
        chartXAxisData.push(country.name);
      });

      // Main Chart Data
      const chartData = {
        series: [
          {
            data: chartSeriesData,
          },
        ],
        options: {
          chart: {
            type: "bar",
            height: "400",
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: true,
          },
          xaxis: {
            categories: chartXAxisData,
          },
        },
      };

      return (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type={"bar"}
          height={"400"}
        />
      );
    } else {
      return <p>No chart data available</p>;
    }
  };

  return <div id="chart"> {renderChart()}</div>;
};

const mapStateToProps = ({ searchedCountries }) => {
  return {
    countries: searchedCountries.countries,
  };
};
export default connect(mapStateToProps)(ChartDisplay);
