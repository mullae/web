import GA4React, { useGA4React } from "ga-4-react";
export const ga4react = new GA4React("G-PCH88FHB6N");

export const GetGa = () => {
  const ga = useGA4React();
  console.log(ga);
};

export const initialize = async () => {
  await ga4react.initialize();
};
