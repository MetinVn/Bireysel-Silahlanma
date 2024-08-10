import { useState, useEffect } from "react";
import { getDataByStateAndYear } from "../utils/Reuse";

export const categories = [
  "violent_crime",
  "homicide",
  "robbery",
  "aggravated_assault",
  "property_crime",
  "burglary",
  "larceny",
  "motor_vehicle_theft",
];

export const categoryTranslations = {
  violent_crime: "Şiddet Suçları",
  homicide: "Cinayet",
  robbery: "Soygun",
  aggravated_assault: "Ağır Saldırı",
  property_crime: "Mülk Suçları",
  burglary: "Kasa soygunu",
  larceny: "Hırsızlık",
  motor_vehicle_theft: "Motorlu Araç Hırsızlığı",
};

export const useDashboardData = () => {
  const [selectedYear, setSelectedYear] = useState(2019);
  const [selectedCity, setSelectedCity] = useState("Alaska");
  const [data, setData] = useState({
    percentages: categories.map((category) =>
      getDataByStateAndYear(selectedYear, selectedCity, category)
    ),
    crimeTypes: categories,
    title: "Alaska",
  });

  useEffect(() => {
    setData({
      percentages: categories.map((category) =>
        getDataByStateAndYear(selectedYear, selectedCity, category)
      ),
      crimeTypes: translatedCategories,
      title: selectedCity,
    });
  }, [selectedYear, selectedCity]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const translatedCategories = categories.map(
    (category) => categoryTranslations[category]
  );

  return {
    selectedYear,
    selectedCity,
    data,
    handleYearChange,
    handleCityChange,
  };
};
