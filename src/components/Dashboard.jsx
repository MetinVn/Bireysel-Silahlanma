import { lazy, Suspense, useState, useMemo } from "react";

const PieChart = lazy(() => import("./PieChart"));
const Form = lazy(() => import("./Form.jsx"));
import { categoryTranslations } from "../hooks/useDashboardData";
import { stateNames } from "../utils/Reuse";

const Dashboard = ({ data }) => {
  const [year, setYear] = useState(2019);
  const [state, setState] = useState("California");

  const years = useMemo(() => [...new Set(data.map((d) => d.year))], [data]);

  const handleYearChange = (e) => setYear(e.target.value);
  const handleStateChange = (e) => setState(e.target.value);

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <Suspense fallback={<div>Loading...</div>}>
        <PieChart
          data={data}
          year={year}
          state={state}
          categoryTranslations={categoryTranslations}
        />
        <div className="flex flex-row w-full gap-10">
          <Form
            label="Şehir seçin"
            onChange={handleYearChange}
            options={years}
            value={year}
          />
          <Form
            label="Eyalet seçin"
            onChange={handleStateChange}
            options={stateNames}
            value={state}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default Dashboard;
