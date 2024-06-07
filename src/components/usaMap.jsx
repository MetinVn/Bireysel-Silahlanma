import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import usMapData from "../gz_2010_us_040_00_500k.json";
import crimeData from "../estimated_crimes_1979_2019.json";
import Dashboard from "./Dashboard.jsx";
import { MenuItem, Select, Button, ButtonGroup } from "@mui/material";

const USAMap = () => {
  const svgRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState("violent_crime");
  const [categories, setCategories] = useState([]);
  const [clickedState, setClickedState] = useState("Alaska");
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [crimeLimit, setCrimeLimit] = useState(1);
  const [showDots, setShowDots] = useState(false);

  const getDataByState = (stateName, category) => {
    const stateData = crimeData.find(
      (entry) => entry.state_name === stateName && entry.year === 2019
    );
    return stateData ? stateData[category] || 0 : 0;
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const categoryTranslations = {
    violent_crime: "Şiddetli suç",
    homicide: "Cinayet",
    robbery: "Soygun",
    aggravated_assault: "Ağırlaştırılmış saldırı",
    property_crime: "Mülkiyet Suçu",
    burglary: "Çalıntı mal",
    larceny: "Çalma",
    motor_vehicle_theft: "Motorlu Taşıt Hırsızlığı",
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = 960;
    const height = 600;

    const projection = d3
      .geoAlbersUsa()
      .translate([width / 2, height / 2])
      .scale(1000);
    const path = d3.geoPath().projection(projection);

    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("width", "100%")
      .style("height", "auto");

    const excludedFields = [
      "caveats",
      "population",
      "state_name",
      "state_abbr",
      "year",
      "rape_legacy",
      "rape_revised",
    ];

    const categories = Object.keys(crimeData[0]).filter(
      (category) => !excludedFields.includes(category)
    );
    setCategories(categories);

    const colorScales = {
      violent_crime: d3.scaleSequential(d3.interpolatePuRd).domain([0, 40000]),
      homicide: d3.scaleSequential(d3.interpolateReds).domain([0, 1000]),
      robbery: d3.scaleSequential(d3.interpolateGreens).domain([0, 10000]),
      aggravated_assault: d3
        .scaleSequential(d3.interpolateGreys)
        .domain([0, 20000]),
      property_crime: d3
        .scaleSequential(d3.interpolateBlues)
        .domain([0, 300000]),
      burglary: d3.scaleSequential(d3.interpolateOranges).domain([0, 300000]),
      larceny: d3.scaleSequential(d3.interpolateBuGn).domain([0, 400000]),
      motor_vehicle_theft: d3
        .scaleSequential(d3.interpolatePuOr)
        .domain([0, 40000]),
    };

    const updateColors = (category) => {
      const colorScale = colorScales[category];

      svg.selectAll(".state").attr("fill", (d) => {
        const stateName = d.properties.NAME;
        const stateCrimeData = crimeData.find(
          (entry) => entry.state_name === stateName
        );
        return colorScale(stateCrimeData ? stateCrimeData[category] : 0);
      });
    };

    const drawDots = (category, limit) => {
      svg.selectAll(".dot").remove();
      svg.selectAll(".line").remove();

      const statesWithDots = usMapData.features.filter((d) => {
        const stateName = d.properties.NAME;
        const stateCrimeData = crimeData.find(
          (entry) => entry.state_name === stateName && entry.year === 2019
        );
        if (limit !== null && stateCrimeData) {
          const crimeRate = stateCrimeData[category];
          if (limit === 1) {
            return crimeRate < 15000;
          } else if (limit === 2) {
            return crimeRate >= 15000 && crimeRate < 50000;
          } else if (limit === 3) {
            return crimeRate >= 50000;
          }
        }
        return false;
      });

      const dots = svg
        .selectAll(".dot")
        .data(statesWithDots)
        .enter()
        .append("circle")
        .attr("class", "dot pulsing-dot")
        .attr("cx", (d) => projection(d3.geoCentroid(d))[0])
        .attr("cy", (d) => projection(d3.geoCentroid(d))[1])
        .attr("r", 5)
        .attr("fill", "#2a9d8f")
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .style("opacity", 1);

      if (showDots && dots) {
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
    };

    const handleMouseOver = (event, d) => {
      const stateName = d.properties.NAME;
      setClickedState(stateName);
      setTooltipPos({ x: event.pageX, y: event.pageY });
      setTooltipVisible(true);
      d3.select(event.target).attr("stroke", "#5dd39e");
    };

    const handleMouseMove = (event) => {
      setTooltipPos({ x: event.pageX, y: event.pageY });
    };

    const handleMouseOut = () => {
      setTooltipVisible(false);
      d3.select(event.target).attr("stroke", "#705831");
    };

    svg
      .selectAll("path")
      .data(usMapData.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("stroke", "#705831")
      .attr("stroke-width", 1)
      .attr("class", "state")
      .on("mouseover", handleMouseOver)
      .on("mousemove", handleMouseMove)
      .on("mouseout", handleMouseOut);

    svg.selectAll(".state").on("click", function (event, d) {
      const stateName = d.properties.NAME;
      setClickedState(stateName);
    });

    updateColors(selectedCategory);

    if (showDots) {
      drawDots(selectedCategory, crimeLimit);
    } else {
      svg.selectAll(".dot").remove();
      svg.selectAll(".line").remove();
    }
  }, [selectedCategory, showDots, crimeLimit]);

  useEffect(() => {
    const crimeValue = getDataByState(clickedState, selectedCategory);
    setTooltipContent(`${clickedState}: ${crimeValue}`);
  }, [selectedCategory, clickedState, tooltipVisible]);

  const data1 = {
    percentages: clickedState
      ? [
          getDataByState(clickedState, "violent_crime"),
          getDataByState(clickedState, "homicide"),
          getDataByState(clickedState, "robbery"),
          getDataByState(clickedState, "aggravated_assault"),
          getDataByState(clickedState, "property_crime"),
          getDataByState(clickedState, "burglary"),
          getDataByState(clickedState, "larceny"),
          getDataByState(clickedState, "motor_vehicle_theft"),
        ]
      : [],
    crimeTypes: [
      "Şiddetli suç",
      "Cinayet",
      "Soygun",
      "Ağırlaştırılmış saldırı",
      "Mülkiyet Suçu",
      "Çalıntı mal",
      "Çalma",
      "Motorlu Taşıt Hırsızlığı",
    ],
    title: clickedState !== "" ? clickedState : "",
  };

  const toggleDots = () => {
    setShowDots((prevShowDots) => !prevShowDots);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="lg:w-2/4 xl:w-2/3 px-4 relative">
        <svg ref={svgRef} width={550} height={300} className="w-full"></svg>
        {tooltipVisible && (
          <div
            style={{
              position: "absolute",
              top: tooltipPos.y - 400,
              left: tooltipPos.x - 60,
              backgroundColor: "white",
              padding: "5px",
              border: "1px solid black",
              pointerEvents: "none",
            }}>
            {tooltipContent}
          </div>
        )}
      </div>
      <div className="lg:w-1/4 xl:w-1/3 px-4">
        <div className="mb-4">
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full">
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {categoryTranslations[category]}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <ButtonGroup variant="contained" color="primary">
            <Button onClick={toggleDots}>
              {showDots ? "Noktaları Gizle" : "Noktaları Göster"}
            </Button>
            <Button onClick={() => setCrimeLimit(1)}>15.000'den Az</Button>
            <Button onClick={() => setCrimeLimit(2)}>
              15.000 ve 50.000 Arası
            </Button>
            <Button onClick={() => setCrimeLimit(3)}>50.000'den Fazla</Button>
          </ButtonGroup>
        </div>
        <Dashboard data={data1} />
      </div>
    </div>
  );
};

export default USAMap;
