import { ComboBoxOptionProps } from "@/components/ui/combo-box";
import { fromFlightData, toFlightData } from "@/data";
import { FlightTypeProps } from "@/types";
import { addDays } from "date-fns";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { InputStack } from "./input-stack";
import { Box, Grid } from "@mui/material";
import { ConnectingAirports, AirplanemodeActive } from "@mui/icons-material";

export function renderRadioContent(value: FlightTypeProps) {
  switch (value) {
    case "multi-city":
      return <MultiCity />;
    case "one-way":
      return <OneWay />;
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
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        gap: {
          xs: "0.8rem",
          sm: "0rem",
          md: "1rem",
        },
        flexDirection: { xs: "column", sm: "column", md: "row" },
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
          width: "100%",
          mt: { xs: 5, sm: 4, md: 4 },
        }}
      >
        <ConnectingAirports
          sx={{
            fontSize: {
              xs: 60,
              sm: 60,
              md: 60,
              lg: 80,
            },
            color: "var(--primary)",
          }}
        />
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
    </Box>
  );
}

function OneWay() {
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
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        gap: {
          xs: "0rem",
          sm: "0rem",
          md: "1rem",
        },
        flexDirection: { xs: "column", sm: "column", md: "row" },
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
          mt: { xs: 3, sm: 4 },
          transform: {
            xs: "",
            sm: "",
            md: "rotate(90deg)",
          },
          marginLeft: {
            xs: 0,
            sm: 0,
            md: "-2.7rem",
          },
        }}
      >
        <AirplanemodeActive sx={{ fontSize: 80, color: "var(--primary)" }} />
      </Grid>

      <InputStack
        label='TO'
        airportCode={toCode?.departurePlace || ""}
        value={toCode}
        onChange={handleToChange}
        options={toFlightData}
        hideDate={true}
      />
    </Box>
  );
}

function MultiCity() {
  const [fromCode, setFromCode] = useState<ComboBoxOptionProps | null>(
    fromFlightData[0]
  );
  const [multiFromCode, setMultiFromCode] =
    useState<ComboBoxOptionProps | null>(fromFlightData[3]);
  const [multiToCode, setMultiToCode] = useState<ComboBoxOptionProps | null>(
    fromFlightData[2]
  );
  const [toCode, setToCode] = useState<ComboBoxOptionProps | null>(
    fromFlightData[1]
  );
  // state to track if toCode has been manually changed
  const [toCodeTouched, setToCodeTouched] = useState(false);
  const [multiToCodeTouched, setMultiToCodeTouched] = useState(false);

  const [multiToDate, setMultiToDate] = useState<Dayjs | null>(
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
  const handleMultiFromChange = (value: ComboBoxOptionProps | null) => {
    setMultiFromCode(value);

    if (!multiToCodeTouched && value) {
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
  const handleMultiToChange = (value: ComboBoxOptionProps | null) => {
    setMultiToCode(value);
    setMultiToCodeTouched(true); // Mark as manually changed
  };
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: {
            xs: "0rem",
            sm: "0rem",
            md: "1rem",
          },
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <InputStack
          label='FROM'
          airportCode={fromCode?.departurePlace || ""}
          value={fromCode}
          onChange={handleFromChange}
          options={fromFlightData}
          hideDate={true}
        />

        <Grid
          size={{ xs: 12, sm: 1 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 3, sm: 4 },
            transform: {
              xs: "",
              sm: "",
              md: "rotate(90deg)",
            },
            marginLeft: {
              xs: 0,
              sm: 0,
              md: "-4rem",
            },
          }}
        >
          <AirplanemodeActive sx={{ fontSize: 80, color: "var(--primary)" }} />
        </Grid>

        <Box sx={{ marginTop: "1.5rem" }}>
          <InputStack
            label='TO'
            airportCode={toCode?.departurePlace || ""}
            value={toCode}
            onChange={handleToChange}
            options={toFlightData}
            date={toDate}
            setDate={setToDate}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: {
            xs: "0rem",
            sm: "0rem",
            md: "1rem",
          },
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <InputStack
          label='FROM'
          airportCode={multiFromCode?.departurePlace || ""}
          value={multiFromCode}
          onChange={handleMultiFromChange}
          options={fromFlightData}
          hideDate={true}
        />

        <Grid
          size={{ xs: 12, sm: 1 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 3, sm: 4 },
            transform: {
              xs: "",
              sm: "",
              md: "rotate(90deg)",
            },
            marginLeft: {
              xs: 0,
              sm: 0,
              md: "-4rem",
            },
          }}
        >
          <AirplanemodeActive sx={{ fontSize: 80, color: "var(--primary)" }} />
        </Grid>

        <Box sx={{ marginTop: "1.5rem" }}>
          <InputStack
            label='TO'
            airportCode={multiToCode?.departurePlace || ""}
            value={multiToCode}
            onChange={handleMultiToChange}
            options={toFlightData}
            date={multiToDate}
            setDate={setMultiToDate}
          />
        </Box>
      </Box>
    </section>
  );
}
