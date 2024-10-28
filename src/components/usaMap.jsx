import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  Suspense,
  lazy,
} from "react";
import * as d3 from "d3";
import MapControls from "./MapControls.jsx";
import Tooltip from "./Tooltip.jsx";
import {
  getDataByState,
  categorizeStates,
  extractStateNames,
  getDataByStateAndYear,
} from "../utils/Reuse.js";
import { useDashboardData } from "../hooks/useDashboardData.jsx";
import usMapData from "../gz_2010_us_040_00_500k.json";
import crimeData from "../crime-data.json";

const BarDashboard = lazy(() => import("./BarDashboard.jsx"));
const Dashboard = lazy(() => import("./Dashboard.jsx"));

const UsaMap = () => {
  const svgRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState("violent_crime");
  const [hoveredState, setHoveredState] = useState("");
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [crimeLimit, setCrimeLimit] = useState(1);
  const [showDots, setShowDots] = useState(false);
  const width = 960;
  const height = 600;

  const getCategorizedStates = useCallback(
    () => categorizeStates(selectedCategory),
    [selectedCategory]
  );

  const { statesBelow15000, statesBetween15000And50000, statesAbove50000 } =
    useMemo(() => getCategorizedStates(), [getCategorizedStates]);

  const statesWithDots = useMemo(() => {
    switch (crimeLimit) {
      case 1:
        return usMapData.features.filter((d) =>
          statesBelow15000.includes(d.properties.NAME)
        );
      case 2:
        return usMapData.features.filter((d) =>
          statesBetween15000And50000.includes(d.properties.NAME)
        );
      case 3:
        return usMapData.features.filter((d) =>
          statesAbove50000.includes(d.properties.NAME)
        );
      default:
        return [];
    }
  }, [
    crimeLimit,
    statesBelow15000,
    statesBetween15000And50000,
    statesAbove50000,
  ]);

  const {
    selectedYear,
    selectedCity,
    data,
    handleYearChange,
    handleCityChange,
  } = useDashboardData();

  const handleCategoryChange = useCallback(
    (e) => {
      setSelectedCategory(e.target.value);
      const crimeValue = getDataByState(hoveredState, e.target.value);
      setTooltipContent(`${hoveredState}: ${crimeValue}`);
    },
    [hoveredState]
  );

  const handleHoveredState = useCallback(
    (stateName) => setHoveredState(stateName),
    []
  );

  const handleMouseOut = useCallback(() => {
    setTooltipVisible(false);
    setTooltipPos({ x: 0, y: 0 });
  }, []);

  const handleMouseMove = useCallback(
    (event) => setTooltipPos({ x: event.pageX, y: event.pageY }),
    []
  );

  const handleMouseOver = useCallback(
    (event, d) => {
      const stateName = d.properties.NAME;
      handleHoveredState(stateName);
      setTooltipPos({ x: event.pageX, y: event.pageY });
      setTooltipVisible(true);
    },
    [handleHoveredState]
  );

  const toggleDots = useCallback(
    () => setShowDots((prevShowDots) => !prevShowDots),
    []
  );

  useEffect(() => {
    const crimeValue = getDataByState(hoveredState, selectedCategory);
    setTooltipContent(`Eyalet: ${hoveredState} Sayı: ${crimeValue}`);
  }, [hoveredState, selectedCategory]);

  const initializeMap = useCallback(() => {
    console.log("Initialized the map");
    const svg = d3.select(svgRef.current);
    const projection = d3
      .geoAlbersUsa()
      .translate([width / 2, height / 2])
      .scale(1000);
    const path = d3.geoPath().projection(projection);

    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("width", "100%")
      .style("height", "auto");

    svg
      .selectAll("path")
      .data(usMapData.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("stroke", "#8ecae6")
      .attr("stroke-width", 1)
      .attr("class", "state")
      .on("mouseover", handleMouseOver)
      .on("mousemove", handleMouseMove)
      .on("mouseout", handleMouseOut);
  }, [handleMouseOver, handleMouseMove, handleMouseOut]);

  const updateColors = useCallback(() => {
    const svg = d3.select(svgRef.current);

    const stateNames2019 = extractStateNames(crimeData);
    const crimeValues = stateNames2019.map((stateName) =>
      getDataByStateAndYear(2019, stateName, selectedCategory)
    );
    const maxCrimeValue = d3.max(crimeValues);
    const minCrimeValue = d3.min(crimeValues);

    const colorScale = d3
      .scaleSequential(d3.interpolateBlues)
      .domain([minCrimeValue, maxCrimeValue]);

    svg.selectAll(".state").attr("fill", (d) => {
      const stateName = d.properties.NAME;
      const stateCrimeValue = getDataByStateAndYear(
        2019,
        stateName,
        selectedCategory
      );
      return colorScale(stateCrimeValue || minCrimeValue);
    });
  }, [selectedCategory]);

  const drawDots = useCallback(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll(".dot").remove();
    svg.selectAll(".line").remove();

    const projection = d3
      .geoAlbersUsa()
      .translate([width / 2, height / 2])
      .scale(1000);

    const dots = svg
      .selectAll(".dot")
      .data(statesWithDots)
      .enter()
      .append("circle")
      .attr("class", "dot pulsing-dot")
      .attr("cx", (d) => projection(d3.geoCentroid(d))[0])
      .attr("cy", (d) => projection(d3.geoCentroid(d))[1])
      .attr("r", 3)
      .attr("fill", "#2a9d8f")
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .style("opacity", 1);

    if (showDots && dots.size() > 0) {
      const lineGenerator = d3
        .line()
        .x((d) => projection(d3.geoCentroid(d))[0])
        .y((d) => projection(d3.geoCentroid(d))[1]);
      const lineData = statesWithDots.map((d) => d);

      svg
        .append("path")
        .datum(lineData)
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "#2a9d8f")
        .attr("stroke-width", 2)
        .attr("d", lineGenerator)
        .style("stroke-dasharray", function () {
          return this.getTotalLength();
        })
        .style("stroke-dashoffset", function () {
          return this.getTotalLength();
        })
        .transition()
        .duration(2000)
        .ease(d3.easeLinear)
        .style("stroke-dashoffset", 0);
    }
  }, [statesWithDots, showDots]);

  useEffect(() => {
    initializeMap();
  }, [initializeMap]);

  useEffect(() => {
    updateColors();
  }, [selectedCategory, updateColors]);

  useEffect(() => {
    if (showDots) {
      drawDots();
    } else {
      const svg = d3.select(svgRef.current);
      svg.selectAll(".dot").remove();
      svg.selectAll(".line").remove();
    }
  }, [showDots, crimeLimit, drawDots]);

  return (
    <div className="relative flex flex-col items-center bg-slate-100">
      <MapControls
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        showDots={showDots}
        toggleDots={toggleDots}
        crimeLimit={crimeLimit}
        setCrimeLimit={setCrimeLimit}
      />
      <div className="relative flex flex-col items-center w-full mt-20">
        <svg ref={svgRef} width={600} height={300}></svg>
        <Tooltip
          content={tooltipContent}
          pos={tooltipPos}
          visible={tooltipVisible}
        />
      </div>
      <div className="w-full flex flex-col items-center px-4">
        <Suspense fallback={<div>Loading BarDashboard...</div>}>
          <BarDashboard
            selectedYear={selectedYear}
            selectedCity={selectedCity}
            handleYearChange={handleYearChange}
            handleCityChange={handleCityChange}
            data={data}
          />
        </Suspense>
        <Suspense fallback={<div>Loading Dashboard...</div>}>
          <Dashboard data={crimeData} />
        </Suspense>
      </div>
    </div>
  );
};

export default UsaMap;
