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
            enabled: false,
          },
          xaxis: {
            categories: chartXAxisData,
          },
        },
      };

      return (
        <>
          <h2 className="mb-3">Population Data</h2>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type={"bar"}
            height={"400"}
          />
        </>
      );
    } else {
      return <p>No chart data available</p>;
    }
  };

  return (
    <div id="chart" className="mt-5">
      {renderChart()}
    </div>
  );
};

const mapStateToProps = ({ searchedCountries }) => {
  return {
    countries: searchedCountries.countries,
  };
};
export default connect(mapStateToProps)(ChartDisplay);
