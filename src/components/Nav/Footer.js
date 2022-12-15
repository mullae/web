import React from "react";
import { Button } from "antd";

export const Footer = () => {
  const doTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="lg:hidden">
        <div className="footer py-14 px-6">
          <div className="text-lg font-bold">문래라이브</div>
          <div>서울 영등포구 선유로 75 GS강서타워 3F 오픈스튜디오</div>
          <div className="mt-8">
            <div className="font-light">mullaelive@gsretail.com</div>
            <div className="font-light">02-2007-0202</div>
          </div>
        </div>
      </div>

      <div className="footer py-24 px-72 hidden lg:block">
        <div style={{ position: "fixed", right: 20, bottom: 100 }}>
          <Button
            type="primary"
            size="large"
            shape="circle"
            onClick={() => doTop()}
          >
            ↑
          </Button>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="font-bold">문래라이브</div>
            <div className="mb-4 font-light">
              서울 영등포구 선유로 75 GS강서타워 3F 오픈스튜디오
            </div>
            <div className="font-light">mullaelive@gsretail.com</div>
            <div className="font-light text-2xl">02-2007-0202</div>
          </div>
        </div>
      </div>
    </>
  );
};
