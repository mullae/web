import React, { useEffect } from "react";
import { Refer1 } from "./Refer1";
import { Refer2 } from "./Refer2";
import { Refer3 } from "./Refer3";
import { Refer4 } from "./Refer4";
import { Content7 } from "components/Content/Content7";

export const Reference = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Refer1 />
      <Refer2 />
      <Refer3 />
      {/* <Refer4 />
      <Refer5 /> */}
      <Refer4 />
      <Content7 />
    </div>
  );
};
