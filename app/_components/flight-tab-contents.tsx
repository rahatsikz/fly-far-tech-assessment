"use client";
import SelectBox from "@/components/ui/select-box";
import { radioButtonsArr } from "@/data";
import { FlightTypeProps } from "@/types";
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { renderRadioContent } from "./render-content";

export function FlightTabContent() {
  const [tripType, setTripType] = useState<FlightTypeProps>("round-way");

  return (
    <Box
      sx={{
        padding: "0rem 2rem ",
        display: "flex",
        gap: "1.5rem",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
      }}
    >
      <div style={{ padding: "1.5rem 0 2rem", flex: 2.1 }}>
        <RadioButtonGroup setTripType={setTripType} />
        {/*content  based on trip type*/}
        {renderRadioContent(tripType)}
      </div>
      <Box
        sx={{
          width: "100%",
          flex: 1,
          minHeight: "300px",
          borderLeft: {
            xs: "none",
            lg: "2px dashed var(--secondary)",
          },
          borderTop: {
            xs: "2px dashed var(--secondary)",
            lg: "none",
          },
          padding: {
            xs: "1.5rem 0",
            lg: "1.5rem 0 2rem 1.5rem",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <GuestInfo />
        <Button
          variant='contained'
          sx={{
            width: "100%",
            bgcolor: "var(--primary)",
            boxShadow: "none",
            fontWeight: "600",
            borderRadius: "6px",
          }}
        >
          Search For Flights
        </Button>
      </Box>
    </Box>
  );
}

function GuestInfo() {
  const [adultCount, setAdultCount] = useState("1 Adult");
  const [infantCount, setInfantCount] = useState("1 Infant");
  const [childCount, setChildCount] = useState("1 Child");
  const [flightType, setFlightType] = useState("economy");

  const getOptions = (title: string) => {
    return Array.from({ length: 5 }, (_, i) => {
      const count = i + 1;
      return `${count} ${title}${count > 1 ? "s" : ""}`;
    });
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: {
            xs: "wrap",
            lg: "nowrap",
          },
          justifyContent: "space-between",
          gap: {
            xs: "1rem",
            lg: ".8rem",
          },
        }}
      >
        <SelectBox
          options={getOptions("Adult")}
          value={adultCount}
          setValue={setAdultCount}
        />
        <SelectBox
          options={getOptions("Child")}
          value={childCount}
          setValue={setChildCount}
        />
        <SelectBox
          options={getOptions("Infant")}
          value={infantCount}
          setValue={setInfantCount}
        />
      </Box>
      <Box
        sx={{
          mt: {
            xs: "0.8rem",
            lg: "1.3rem",
          },
        }}
      >
        <SelectBox
          options={["economy", "business", "first class", "premium"]}
          value={flightType}
          setValue={setFlightType}
        />
      </Box>
    </div>
  );
}

function RadioButtonGroup({
  setTripType,
}: {
  setTripType: (tripType: FlightTypeProps) => void;
}) {
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );
  const router = useRouter();
  const handleTripTypeChange = (newTripType: FlightTypeProps | null) => {
    if (newTripType !== null) {
      setTripType(newTripType);
      params.set("trip-type", newTripType);
      router.replace(`?${params.toString()}`);
    }
  };
  return (
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
              onChange={() =>
                handleTripTypeChange(radioButton.value as FlightTypeProps)
              }
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
              label={
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  {radioButton.label}
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}
