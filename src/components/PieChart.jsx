import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { categories } from "../utils/Reuse";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, year, state, categoryTranslations }) => {
  const filteredData = data.filter(
    (d) => d.year === year && d.state_name === state
  );

  const translatedCategories = categories.map(
    (cat) => categoryTranslations[cat] || cat
  );

  const chartData = {
    labels: translatedCategories,
    datasets: [
      {
        data: categories.map((cat) =>
          filteredData[0] ? filteredData[0][cat] : 0
        ),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-[500px]">
      <h2>Pasta Grafik</h2>
      <Pie
        data={chartData}
        width={400}
        height={400}
        options={{
          responsive: true,
          plugins: {
            legend: { display: true },
            tooltip: {
              callbacks: {
                label: (context) => `${context.label}: ${context.raw}`,
              },
            },
          },
        }}
      />
      <p>
        Bu pasta grafik, seçilen eyalet ve yıl için farklı suç kategorilerinin
        dağılımını göstermektedir. Her dilim, her kategori için bildirilen
        suçların oranını temsil eder.
      </p>
    </div>
  );
};

export default PieChart;
