import React from "react";
import titleLogo from "assets/images/refer-logo.png";
import { Link } from "react-router-dom";
import animateScrollTo from "animated-scroll-to";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mt-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <button
              onClick={() => doScroll()}
              style={{
                marginTop: -9,
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
