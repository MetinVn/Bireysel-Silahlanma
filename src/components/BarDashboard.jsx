import React, { memo, useMemo } from "react";
import Chart from "react-apexcharts";
import { stateNames } from "../utils/Reuse";
import Form from "./Form.jsx";

const BarDashboard = React.forwardRef((props, _) => {
  const {
    selectedYear,
    selectedCity,
    handleYearChange,
    handleCityChange,
    data,
  } = props;

  const yearsRange = useMemo(
    () => [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    []
  );

  const chartOptions = useMemo(
    () => ({
      chart: {
        type: "bar",
        height: 400,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          barHeight: "60%",
        },
      },
      xaxis: {
        categories: data.crimeTypes,
        title: {
          text: "Suç sayısı",
          style: {
            fontSize: "14px",
            color: "#6c757d",
          },
        },
        labels: {
          style: {
            fontSize: "12px",
            colors: "#6c757d",
          },
        },
      },
      yaxis: {
        title: {
          text: "Cinayet türü",
          style: {
            fontSize: "14px",
            color: "#6c757d",
          },
        },
        labels: {
          style: {
            fontSize: "12px",
            colors: "#6c757d",
          },
        },
      },
      title: {
        text: data.title || "Crime Data",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#343a40",
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#fff"],
          fontSize: "12px",
        },
      },
      colors: [
        "#0056b3",
        "#007bff",
        "#17a2b8",
        "#28a745",
        "#dc3545",
        "#fd7e14",
        "#6f42c1",
        "#20c997",
      ],
      grid: {
        borderColor: "#e9ecef",
      },
    }),
    [data]
  );

  return (
    <div className="flex flex-col items-center m-auto gap-6 p-10 my-12 w-full bg-slate-300 shadow-xl rounded-lg">
      <p className="text-lg lg:text-xl font-semibold text-gray-700 mb-4">
        {"Yıl ve Şehri seçin"}
      </p>

      <div className="flex w-[50%] gap-4 mb-4">
        <Form
          label="Yıl"
          onChange={handleYearChange}
          options={yearsRange}
          value={selectedYear}
        />
        <Form
          label="Şehir"
          onChange={handleCityChange}
          options={stateNames}
          value={selectedCity}
        />
      </div>

      <div className="flex items-center justify-center">
        <Chart
          id="chart"
          type="bar"
          width={800}
          series={[
            {
              name: "Crime Count",
              data: data.percentages,
            },
          ]}
          options={chartOptions}
        />
      </div>
    </div>
  );
});

export default memo(BarDashboard);
