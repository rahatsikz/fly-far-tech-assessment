"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { FlightTakeoff } from "@mui/icons-material";

export default function SearchTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label='Search Tabs'
            slotProps={{
              indicator: { style: { background: "var(--primary)" } },
            }}
          >
            <Tab
              label='Flight'
              value='1'
              icon={<FlightTakeoff />}
              iconPosition='start'
              style={{ color: "var(--primary)", borderColor: "red" }}
            />
          </TabList>
        </Box>
        <TabPanel value='1'>Item One</TabPanel>
        <TabPanel value='2'>Item Two</TabPanel>
        <TabPanel value='3'>Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
