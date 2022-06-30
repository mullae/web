import React from "react";
import { Button } from "antd";
import { InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";
import ReactGA from "react-ga";

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
          <div className="mt-8" style={{ marginLeft: -10 }}>
            <Button
              icon={<InstagramOutlined />}
              type="ghost"
              size="large"
              href="https://www.instagram.com/mullaelive"
              target="_blank"
              onClick={() => {
                ReactGA.event({
                  category: "MOBILE",
                  action: "main-instagram",
                  label: "인스타그램",
                });
              }}
            ></Button>
            <Button
              icon={<YoutubeOutlined />}
              type="ghost"
              size="large"
              href="https://www.youtube.com/channel/UC-Z7FBglF3yOjpNYIJu2DMQ"
              target="_blank"
              onClick={() => {
                ReactGA.event({
                  category: "MOBILE",
                  action: "main-youtube",
                  label: "유튜브",
                });
              }}
            ></Button>
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
            <div className="font-light">02-2007-0202</div>
          </div>
          <div>
            <div>
              <Button
                icon={<InstagramOutlined style={{ fontSize: "28px" }} />}
                type="ghost"
                href="https://www.instagram.com/mullaelive"
                target="_blank"
                className="mr-4"
                onClick={() => {
                  ReactGA.event({
                    category: "WEB",
                    action: "main-instagram",
                    label: "인스타그램",
                  });
                }}
              ></Button>
              <Button
                icon={<YoutubeOutlined style={{ fontSize: "28px" }} />}
                type="ghost"
                href="https://www.youtube.com/channel/UC-Z7FBglF3yOjpNYIJu2DMQ"
                target="_blank"
                onClick={() => {
                  ReactGA.event({
                    category: "WEB",
                    action: "main-youtube",
                    label: "유튜브",
                  });
                }}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
