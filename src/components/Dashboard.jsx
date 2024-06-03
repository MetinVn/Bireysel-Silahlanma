import Chart from "react-apexcharts";
const Dashboard = (props) => {
  return (
    <div className="flex flex-col items-center gap-4 lg:w-full">
      <p className="mt-3 text-[12px] md:mt-5 md:mb-2 lg:mb-5 md:text-sm lg:text-xl font-semibold md:tracking-tighter lg:tracking-tight rounded-md md:leading-[10px] lg:leading-[18px]">
        2019 yılında ABD'de yaşanan cinayetler
      </p>
      <div className="h-[200px] md:h-[300px] w-fit flex items-center justify-center">
        <Chart
          id="chart"
          type="donut"
          width={400}
          series={props.data.percentages}
          options={{
            labels: props.data.crimeTypes,
            title: {
              text: `${props.data.title}`,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      fontSize: 20,
                      label: "Toplam",
                    },
                  },
                  size: 75,
                },
              },
            },
            dataLabels: {
              enabled: true,
            },
            colors: [
              "#669bbc",
              "#FFB6C1",
              "#8A2BE2",
              "#32CD32",
              "#FFD700",
              "#4169E1",
              "#FFA500",
              "#9370DB",
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
