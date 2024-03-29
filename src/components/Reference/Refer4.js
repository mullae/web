import React from "react";
import { Button } from "antd";
import ReactGA from "react-ga";

export const Refer4 = () => {
  return (
    <>
      <div className="lg:hidden">
        <div
          className="suggestion-wrap flex flex-col justify-center items-center mt-8 text-xl"
          style={{ backgroundColor: "#967961" }}
        >
          <div className="mt-2">
            <Button
              style={{ width: 150, height: 50 }}
              className="font-bold"
              href="/mullaelive_suggestion_2211.pdf"
              target="_blank"
              onClick={() => {
                ReactGA.event({
                  category: "MOBILE",
                  action: "main-suggestion-pdf",
                  label: "서비스 소개 다운로드",
                });
              }}
            >
              <div style={{ paddingTop: 9 }}>서비스 소개 다운로드</div>
            </Button>
          </div>
        </div>
      </div>

      <div
        className="suggestion-wrap flex flex-col items-center hidden lg:flex"
        style={{ backgroundColor: "#967961", fontSize: 32, marginTop: 120 }}
      >
        <div className="mt-28">
          <Button
            style={{ width: 380, height: 100 }}
            className="font-bold"
            href="/mullaelive_suggestion_2211.pdf"
            target="_blank"
            onClick={() => {
              ReactGA.event({
                category: "WEB",
                action: "main-suggestion-pdf",
                label: "서비스 소개 다운로드",
              });
            }}
          >
            <div className="pt-8 text-3xl">서비스 소개 다운로드</div>
          </Button>
        </div>
      </div>
    </>
  );
};
