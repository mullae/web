import React, { useEffect } from "react";
import { Content1 } from "./Content1";
import { Content2 } from "./Content2";
import { Content3 } from "./Content3";
// import { Content4 } from "./Content4";
// import { Content5 } from "./Content5";
import { Content6 } from "./Content6";
import { Content7 } from "./Content7";
import animateScrollTo from "animated-scroll-to";
import ReactGA from "react-ga";

export const Content = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.location.hash === "#event") {
        ReactGA.event({
          category: "event",
          action: "main",
          label: "상담문의하기",
        });
        animateScrollTo(document.querySelector("#content-7"), {
          speed: 300,
          maxDuration: 1000,
        });
      }
    }, 1000);
  }, []);
  return (
    <div className="content">
      <Content1 />
      <Content2 />
      <Content3 />
      {/* <Content4 /> */}
      {/* <Content5 /> */}
      <Content6 />
      <Content7 />
    </div>
  );
};
