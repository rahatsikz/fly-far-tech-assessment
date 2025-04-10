"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab, { TabProps } from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useMount } from "@/hooks/use-mount";

export function SearchTabs({ tabs }: { tabs: TabProps[] }) {
  const [value, setValue] = React.useState("flight");
  const isMounted = useMount();

  if (!isMounted) {
    return null;
  }

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
            {tabs.map((tab) => (
              <FlyFarTab key={tab.value} {...tab} />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab) => (
          <TabPanel key={tab.value} value={tab.value}>
            {tab.label}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}

function FlyFarTab({ label, value, icon, ...props }: TabProps) {
  return (
    <Tab
      {...props}
      label={label}
      value={value}
      icon={icon}
      iconPosition={"start"}
      style={{ color: "var(--primary)" }}
    />
  );
}
