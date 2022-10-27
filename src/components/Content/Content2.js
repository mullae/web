import React from "react";
import Divider from "assets/images/divider.png";

export const Content2 = () => {
  return (
    <>
      <div className="lg:hidden">
        <div className="grid grid-cols-4 pt-16">
          <div className="col-span-1 pl-6">
            <img
              alt="divider"
              src={Divider}
              style={{ height: 1, marginTop: 9, width: "100%" }}
            />
          </div>
          <div className="col-span-2 text-center">함께 하는 기업들</div>
          <div className="col-span-1 pr-6">
            <img
              alt="divider"
              src={Divider}
              style={{ height: 1, marginTop: 9, width: "100%" }}
            />
          </div>
        </div>
        <div className="px-4">
          <img
            src={require("assets/images/company-logos.png").default}
            alt="company-logos"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-24 hidden lg:flex">
        <div className="flex flex-row">
          <img
            alt="divider"
            src={Divider}
            style={{ height: 1, marginTop: 18 }}
          />
          <div className="text-2xl mx-6">문래라이브와 함께 하는 기업들</div>
          <img
            alt="divider"
            src={Divider}
            style={{ height: 1, marginTop: 18 }}
          />
        </div>
        <div className="px-48" style={{ marginTop: -40, zIndex: -1 }}>
          <img
            src={require("assets/images/company-logos.png").default}
            alt="company-logos"
            className="w-4/5 m-0-auto"
          />
        </div>
      </div>
    </>
  );
};
