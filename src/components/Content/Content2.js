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

        <div className="grid grid-cols-4 gap-4 mb-16 px-8">
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          ].map((_, index) => (
            <div key={`m-key-${index + 1}`}>
              <img
                alt={index}
                src={require(`assets/images/logo-${index + 1}.jpg`).default}
                className="mr-8 pt-4"
                style={{ width: "100%", display: "inline" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-24 hidden lg:flex">
        <div className="flex flex-row mb-4">
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
        <div className="grid grid-cols-4 mb-32">
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          ].map((_, index) => (
            <div key={`key-${index + 1}`} style={{ margin: "0 auto" }}>
              <img
                alt={index}
                src={require(`assets/images/logo-${index + 1}.jpg`).default}
                className="mr-8 pt-4"
                style={{
                  maxWidth: 200,
                  display: "inline",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
