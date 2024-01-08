import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts'
const Dashboard = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 624);
  useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 624;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);

  return (
    <div className="flex flex-col items-center gap-4 lg:w-full">
      <p className="mt-3 text-[12px] md:mt-5 md:mb-2 lg:mb-5 md:text-sm lg:text-xl font-semibold md:tracking-tighter lg:tracking-tight rounded-md md:leading-[10px] lg:leading-[18px]">
        2017 yılında ABD'de yaşanan saldırı olayları
      </p>
      <div className="h-[200px] md:h-[300px] w-fit flex items-center justify-center">
      <Chart
      id="chart"
      type="donut"
      width={isMobile?240:400}
      series={props.data.percentages}
      options={{
        labels:props.data.crimeTypes,
        title:{
          text:`${props.data.title}`,
        },
        plotOptions:{
          pie:{
            donut:{
              labels:{
                show:true,
                total:{
                  show:!isMobile,
                  fontSize:isMobile?10:20
                }
              },
              size:'55%'
            }
          }
        },
        dataLabels:{
          enabled:true,
        }
      }}
      />
        </div>
      </div>
  );
};

export default Dashboard;
