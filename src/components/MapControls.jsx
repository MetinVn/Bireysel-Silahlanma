import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import Form from "./Form.jsx";
import { categories, getTranslatedCategories } from "../utils/Reuse.js";

const MapControls = ({
  selectedCategory,
  handleCategoryChange,
  showDots,
  toggleDots,
  crimeLimit,
  setCrimeLimit,
}) => (
  <div className="absolute top-0 flex items-center flex-row gap-4 p-5 z-10">
    <div className="flex flex-col items-center justify-center gap-2">
      <Form
        label="Kategori"
        onChange={handleCategoryChange}
        options={categories}
        displayOptions={getTranslatedCategories()}
        value={selectedCategory}
      />
      <ButtonGroup className="flex">
        <Button onClick={toggleDots}>
          {showDots ? "Noktaları gizle" : "Noktaları göster"}
        </Button>
        {[1, 2, 3].map((limit) => (
          <Button
            key={limit}
            onClick={() => setCrimeLimit(limit)}
            variant={crimeLimit === limit ? "contained" : "outlined"}>
            {limit === 1
              ? "< 15,000"
              : limit === 2
                ? "15,000 - 50,000"
                : "> 50,000"}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  </div>
);

export default MapControls;
