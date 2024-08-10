import crimeData from "../crime-data.json";

const excludedFields = [
  "caveats",
  "population",
  "state_name",
  "state_abbr",
  "year",
  "rape_legacy",
  "rape_revised",
];

const categoryTranslations = {
  violent_crime: "Şiddet Suçları",
  homicide: "Cinayet",
  robbery: "Soygun",
  aggravated_assault: "Ağır Saldırı",
  property_crime: "Mülk Suçları",
  burglary: "Kasa soygunu",
  larceny: "Hırsızlık",
  motor_vehicle_theft: "Motorlu Araç Hırsızlığı",
};

export const categories = Object.keys(crimeData[0]).filter(
  (category) => !excludedFields.includes(category)
);

export const getTranslatedCategories = () => {
  return categories.map(
    (category) => categoryTranslations[category] || category
  );
};

const memoizedCrimeData = {};
crimeData.forEach((entry) => {
  if (entry.year === 2019) {
    memoizedCrimeData[entry.state_name] = entry;
  }
});

export const getDataByState = (stateName, category) => {
  const stateData = memoizedCrimeData[stateName];
  return stateData?.[category] ?? 0;
};

export const getDataByStateAndYear = (year, stateName, category) => {
  const stateData = crimeData.find(
    (entry) => entry.year === year && entry.state_name === stateName
  );
  return stateData ? stateData[category] ?? 0 : 0;
};

export const categorizeStates = (selectedCategory) => {
  const states = {
    statesBelow15000: [],
    statesBetween15000And50000: [],
    statesAbove50000: [],
  };

  crimeData.forEach((entry) => {
    if (entry.year === 2019 && entry.state_name) {
      const crimeRate = entry[selectedCategory];

      if (crimeRate < 15000) {
        states.statesBelow15000.push(entry.state_name);
      } else if (crimeRate >= 15000 && crimeRate < 50000) {
        states.statesBetween15000And50000.push(entry.state_name);
      } else if (crimeRate >= 50000) {
        states.statesAbove50000.push(entry.state_name);
      }
    }
  });

  return states;
};

export const extractStateNames = (data) => {
  const stateNames = [];

  data.forEach((entry) => {
    if (entry.year === 2019) {
      const stateName = entry.state_name;
      if (stateName && !stateNames.includes(stateName)) {
        stateNames.push(stateName);
      }
    }
  });
  return stateNames;
};

export const stateNames = extractStateNames(crimeData);
