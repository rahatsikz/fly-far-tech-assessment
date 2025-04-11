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
    <Box sx={{ width: "100%", typography: "body1", paddingTop: "30px" }}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label='Search Tabs'
            style={{
              alignItems: "center",
              backgroundColor: "white",
              justifyContent: "center",
              margin: "0 auto",
              maxWidth: "482px",
              padding: "0 16px",
              width: "100%",
              borderRadius: "30px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            slotProps={{
              indicator: { style: { background: "transparent" } },
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
      sx={{
        "&.Mui-selected": { backgroundColor: "var(--primary)", color: "white" },
        borderRadius: "20px",
        minHeight: "36px",
        paddingY: 0.5,
        paddingX: 3,
        textTransform: "none",
      }}
    />
  );
}
