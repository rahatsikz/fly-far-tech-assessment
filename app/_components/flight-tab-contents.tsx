"use client";
import { ComboBox, ComboBoxOptionProps } from "@/components/ui/combo-box";
import { fromFlightData, radioButtonsArr, toFlightData } from "@/data";
import { ConnectingAirports, LocationOn } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function FlightTabContent() {
  const [fromCode, setFromCode] = useState<ComboBoxOptionProps | null>(
    fromFlightData[0]
  );
  const [toCode, setToCode] = useState<ComboBoxOptionProps | null>(
    fromFlightData[1]
  );

  const [toCodeTouched, setToCodeTouched] = useState(false);
  const handleFromChange = (value: ComboBoxOptionProps | null) => {
    setFromCode(value);

    if (!toCodeTouched && value) {
      // Smart auto-selection logic (can be customized)
      const suggestedTo = toFlightData.find(
        (to) => to.departurePlace !== value.departurePlace
      );
      if (suggestedTo) {
        setToCode(suggestedTo);
      }
    }
  };
  const handleToChange = (value: ComboBoxOptionProps | null) => {
    setToCode(value);
    setToCodeTouched(true); // Mark as manually changed
  };

  const [tripType, setTripType] = useState("round-way");
  const handleTripTypeChange = (newTripType: string | null) => {
    if (newTripType !== null) {
      setTripType(newTripType);
    }
  };

  console.log({ fromCode, toCode, tripType });

  return (
    <section style={{ padding: "0.4rem 2rem 1.5rem" }}>
      <Grid size={12} sx={{ mb: 2.5 }}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue={radioButtonsArr[0].value}
            name='radio-buttons-group'
          >
            {radioButtonsArr.map((radioButton) => (
              <FormControlLabel
                key={radioButton.value}
                value={radioButton.value}
                onChange={() => handleTripTypeChange(radioButton.value)}
                control={
                  <Radio
                    sx={{
                      color: "var(--primary)",
                      "&.Mui-checked": {
                        color: "var(--primary)",
                      },
                    }}
                  />
                }
                label={radioButton.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
      <div
        style={{
          display: "flex",
          gap: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            flex: 2,
            gap: "3rem",
          }}
        >
          <InputSection
            label='FROM'
            airportCode={fromCode?.departurePlace || ""}
            value={fromCode}
            onChange={handleFromChange}
            options={fromFlightData}
          />

          <Grid
            size={{ xs: 12, sm: 1 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 2, sm: 4 },
            }}
          >
            <ConnectingAirports
              sx={{ fontSize: 80, color: "var(--primary)" }}
            />
          </Grid>

          <InputSection
            label='TO'
            airportCode={toCode?.departurePlace || ""}
            value={toCode}
            onChange={handleToChange}
            options={toFlightData}
          />
        </div>
        <div style={{ width: "100%", flex: 1, backgroundColor: "black" }}></div>
      </div>
    </section>
  );
}

const InputSection = ({
  label,
  airportCode,
  value,
  onChange,
  options,
}: {
  label: string;
  airportCode: string;
  value: ComboBoxOptionProps | null;
  onChange: (value: ComboBoxOptionProps | null) => void;
  options: ComboBoxOptionProps[];
}) => (
  <Grid
    size={{ xs: 12, sm: 5.5 }}
    sx={{ display: "flex", flexDirection: "column" }}
  >
    <Typography
      variant='body2'
      sx={{
        mb: 0.7,
        fontSize: { xs: "0.6rem", sm: "0.8rem" },
        pl: { xs: 0, md: 0.5 },
      }}
    >
      {label}
    </Typography>
    <Typography
      variant='h3'
      sx={{
        color: "var(--primary)",
        fontWeight: 600,
        letterSpacing: "1px",
        fontSize: { xs: "1.2rem", sm: "1.5rem" },
        mb: 2,
        mt: 0.4,
        pl: { xs: 0, md: 0.5 },
      }}
    >
      {airportCode}
    </Typography>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        bgcolor: "var(--primary)",
        borderRadius: 2,
        overflow: "hidden",
        pl: 1.5,
      }}
    >
      <LocationOn sx={{ color: "white", fontSize: 18 }} />
      <ComboBox
        options={options}
        placeholder='Select destination'
        value={value}
        onChange={onChange}
      />
    </Box>
  </Grid>
);
