import {
  AirplaneTicket,
  FlightTakeoff,
  HomeWork,
  TravelExplore,
} from "@mui/icons-material";
import { TabProps } from "@mui/material";

export const tabs: TabProps[] = [
  {
    label: "Flight",
    value: "flight",
    icon: <FlightTakeoff />,
  },
  {
    label: "Hotel",
    value: "hotel",
    icon: <HomeWork />,
  },
  {
    label: "Tour",
    value: "tour",
    icon: <TravelExplore />,
  },
  {
    label: "Visa",
    value: "visa",
    icon: <AirplaneTicket />,
  },
];
