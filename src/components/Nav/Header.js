import React from "react";
import titleLogo from "assets/images/refer-logo.png";
import { Link } from "react-router-dom";
import animateScrollTo from "animated-scroll-to";
import { PhoneFilled } from "@ant-design/icons";
import ReactGA from "react-ga";

export const Header = () => {
  const doScroll = () => {
    ReactGA.event({
      category: "WEB",
      action: "top-reservation",
      label: "예약문의",
    });
    animateScrollTo(document.querySelector("#content-7"), {
      speed: 300,
      maxDuration: 1000,
    });
  };
  return (
    <>
      <div className="lg:hidden">
        <Link to="/">
          <img
            src={titleLogo}
            alt="logo"
            className="py-8"
            style={{ width: "30%", margin: "0 auto" }}
          />
        </Link>
      </div>
      <div className="flex justify-between py-6 px-72 hidden lg:flex">
        <Link to="/">
          <img src={titleLogo} alt="logo" style={{ width: 160 }} />
        </Link>
        <div className="gap-12 flex" style={{ fontSize: 16 }}>
          <div className="pt-1 mr-3">
            <Link
              to="/"
              onClick={() => {
                ReactGA.event({
                  category: "WEB",
                  action: "top-mullaelive",
                  label: "문래라이브 소개",
                });
              }}
              style={{ fontSize: 16 }}
            >
              문래라이브 소개
            </Link>
          </div>
          <div className="pt-1 mr-3">
            <Link
              to="/reference"
              onClick={() => {
                ReactGA.event({
                  category: "WEB",
                  action: "top-reference",
                  label: "레퍼런스",
                });
              }}
              style={{ fontSize: 16 }}
            >
              레퍼런스
            </Link>
          </div>
          <div className="flex justify-between gap-2">
            <PhoneFilled style={{ paddingTop: 6 }} />
            <button
              onClick={() => doScroll()}
              style={{
                marginTop: 2,
              }}
            >
              예약 문의
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
