import React from "react";
import { Button } from "antd";
import ReactGA from "react-ga";

export const Content5 = () => {
  return (
    <>
      <div className="lg:hidden">
        <div className="suggestion-wrap flex flex-col justify-center items-center text-xl">
          <div className="mt-2">
            <Button
              style={{ width: 300, height: 100 }}
              className="font-bold"
              href="/[GS리테일] 문래라이브 서비스소개_22.06.pdf"
              target="_blank"
              onClick={() => {
                ReactGA.event({
                  category: "MOBILE",
                  action: "main-suggestion-pdf",
                  label: "제안서 다운로드",
                });
              }}
            >
              <div className="pt-8 text-3xl">제안서 다운로드</div>
            </Button>
          </div>
        </div>
      </div>

      <div
        className="suggestion-wrap flex flex-col items-center hidden lg:flex"
        style={{ fontSize: 32, marginTop: 120 }}
      >
        <div className="mt-28">
          <Button
            style={{ width: 300, height: 100 }}
            className="font-bold"
            href="/[GS리테일] 문래라이브 서비스소개_22.06.pdf"
            target="_blank"
            onClick={() => {
              ReactGA.event({
                category: "WEB",
                action: "main-suggestion-pdf",
                label: "제안서 다운로드",
              });
            }}
          >
            <div className="pt-8 text-3xl">제안서 다운로드</div>
          </Button>
        </div>
      </div>
    </>
  );
};
