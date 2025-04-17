import { ComboBoxOptionProps } from "@/components/ui/combo-box";
import { fromFlightData, toFlightData } from "@/data";
import { FlightTypeProps } from "@/types";
import { addDays } from "date-fns";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { InputStack } from "./input-stack";
import { Grid } from "@mui/material";
import { ConnectingAirports } from "@mui/icons-material";

export function renderRadioContent(value: FlightTypeProps) {
  switch (value) {
    case "multi-city":
      return null;
    case "one-way":
      return null;
    case "round-way":
      return <RoundWay />;
  }
}

function RoundWay() {
  const [fromCode, setFromCode] = useState<ComboBoxOptionProps | null>(
    fromFlightData[0]
  );
  const [toCode, setToCode] = useState<ComboBoxOptionProps | null>(
    fromFlightData[1]
  );
  // state to track if toCode has been manually changed
  const [toCodeTouched, setToCodeTouched] = useState(false);

  const [fromDate, setFromDate] = useState<Dayjs | null>(
    dayjs(new Date().toISOString())
  );
  const [toDate, setToDate] = useState<Dayjs | null>(
    dayjs(addDays(new Date().toISOString(), 5))
  );
  const handleFromChange = (value: ComboBoxOptionProps | null) => {
    setFromCode(value);

    if (!toCodeTouched && value) {
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
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        flex: 2,
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <InputStack
        label='FROM'
        airportCode={fromCode?.departurePlace || ""}
        value={fromCode}
        onChange={handleFromChange}
        options={fromFlightData}
        date={fromDate}
        setDate={setFromDate}
      />

      <Grid
        size={{ xs: 12, sm: 1 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: 2, sm: 4 },
        }}
      >
        <ConnectingAirports sx={{ fontSize: 80, color: "var(--primary)" }} />
      </Grid>

      <InputStack
        label='TO'
        airportCode={toCode?.departurePlace || ""}
        value={toCode}
        onChange={handleToChange}
        options={toFlightData}
        date={toDate}
        setDate={setToDate}
      />
    </div>
  );
}
