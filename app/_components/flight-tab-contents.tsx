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
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { renderRadioContent } from "./render-content";

export function FlightTabContent() {
  const [tripType, setTripType] = useState<FlightTypeProps>("round-way");
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );
  const router = useRouter();
  const handleTripTypeChange = (newTripType: FlightTypeProps | null) => {
    if (newTripType !== null) {
      setTripType(newTripType);
      params.set("tripType", newTripType);
      router.replace(`?${params.toString()}`);
    }
  };

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
    <section
      style={{
        padding: "0rem 2rem ",
        display: "flex",
        gap: "1.5rem",
      }}
    >
      <div style={{ padding: "1.5rem 0 2rem" }}>
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
                  label={radioButton.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>

        {/*  */}
        {renderRadioContent(tripType)}
      </div>
      <div
        style={{
          width: "100%",
          flex: 1,
          minHeight: "200px",
          borderLeft: "2px dashed var(--secondary)",
          padding: "1.5rem 0 2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: ".8rem",
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
          <Box sx={{ mt: 1.3 }}>
            <SelectBox
              options={["economy", "business", "first class", "premium"]}
              value={flightType}
              setValue={setFlightType}
            />
          </Box>
        </div>
        <Button
          variant='contained'
          sx={{ width: "100%", bgcolor: "var(--primary)", boxShadow: "none" }}
        >
          Search For Flights
        </Button>
      </div>
    </section>
  );
}
