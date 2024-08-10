import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Form = ({ label, value, onChange, options, displayOptions = null }) => {
  return (
    <FormControl id={label} fullWidth margin="normal">
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        value={value}
        onChange={onChange}
        label={label}>
        {options.map((option, index) => (
          <MenuItem key={option} value={option}>
            {displayOptions?.[index] || option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Form;
