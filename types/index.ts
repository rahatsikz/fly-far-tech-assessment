import React from "react";

export type TabProps = {
    label: string;
    value: string;
    icon: React.ReactElement;
  } ;

  interface PriceBreakdown {
    BaseFare: string;
    Tax: string;
    PaxCount: string;
    PaxType: string;
    Discount: string;
    OtherCharges: string;
    ServiceFee: string;
  }
  
  interface Segment {
    marketingcareer: string;
    marketingcareerName: string;
    marketingflight: string;
    operatingcareer: string;
    operatingflight: string;
    departure: string;
    departureAirport: string;
    departureLocation: string;
    departureTime: string; // ISO date
    arrival: string;
    arrivalTime: string; // ISO date
    arrivalAirport: string;
    arrivalLocation: string;
    flightduration: string;
    bookingcode: string;
    seat: string;
  }
  
  interface Segments {
    go: Segment[];
    back: Segment[];
  }
  
  interface Transit {
    go: {
      transit1: string;
    };
    back: {
      transit1: string;
    };
  }
  
  export interface FlightTicket {
    system: string;
    segment: string;
    uId: string;
    triptype: "Inbound" | "Outbound" | string;
    career: string;
    careerName: string;
    lastTicketTime: string; // datetime
    BasePrice: number;
    Taxes: number;
    netfare: string;
    agentprice: string;
    subagentprice: string;
    customerPrice: number;
    comission: string;
    comissiontype: string;
    comissionvalue: string;
    farecurrency: string;
    airlinescomref: string;
    pricebreakdown: PriceBreakdown[];
  
    godeparture: string;
    godepartureTime: string;
    godepartureDate: string;
    goarrival: string;
    goarrivalTime: string;
    goarrivalDate: string;
  
    backdeparture: string;
    backdepartureTime: string;
    backdepartureDate: string;
    backarrival: string;
    backarrivalTime: string;
    backarrivalDate: string;
  
    goflightduration: string;
    backflightduration: string;
  
    transit: Transit;
  
    bags: string;
    seat: string;
    class: string;
    refundable: string;
  
    segments: Segments;
  
    ischeap: boolean;
  }
  