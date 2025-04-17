import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

export default function SelectBox({
  options,
  value,
  setValue,
}: {
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <FormControl
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "var(--primary)",
          },
      }}
      size='small'
    >
      <Select
        sx={{
          height: "36px",
          fontSize: "14px",
          bgcolor: "var(--input-bg)",
          color: "var(--secondary)",
          borderRadius: "6px",
        }}
        id='infant'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        {options.map((item) => (
          <MenuItem key={item} value={item} sx={{ fontSize: "14px" }}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
