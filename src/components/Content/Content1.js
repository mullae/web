import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import animateScrollTo from "animated-scroll-to";
import { ClockCircleOutlined } from "@ant-design/icons";
import titleLogo from "assets/images/mullaelive.png";
import MainBackground from "assets/images/main-background.jpg";
import ReactGA from "react-ga";

export const Content1 = () => {
  const doScroll = (device) => {
    ReactGA.event({
      category: device,
      action: "main",
      label: "상담문의하기",
    });
    animateScrollTo(document.querySelector("#content-7"), {
      speed: 300,
      maxDuration: 1000,
    });
  };
  return (
    <>
      <div className="lg:hidden pt-4">
        {/* <div
          className="relative mt-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div id="player">
            <iframe
              width="338"
              height="620"
              src="https://www.youtube.com/embed/1DcKLBMandU?autoplay=1&mute=1&loop=1&controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div> */}
        <div className="text-4xl font-extrabold text-center pt-8">
          <div>한 발 앞서가는</div>
          <div className="pt-2">라이브 커머스</div>
        </div>
        <div className="text-center text-gray-400 pt-8">
          <div>상품이 가장 돋보일 수 있도록</div>
          <div>최고의 영상 퀄리티로 방송을 제작해 드립니다.</div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => doScroll("MOBILE")}
            size="large"
            className="mr-4 button-primary-color"
            style={{
              borderRadius: 10,
            }}
          >
            상담 문의하기
          </Button>
          <Button
            size="large"
            style={{
              borderRadius: 10,
            }}
          >
            <Link
              to="/reference"
              onClick={() => {
                ReactGA.event({
                  category: "MOBILE",
                  action: "main-reference",
                  label: "레퍼런스",
                });
              }}
            >
              레퍼런스
            </Link>
          </Button>
        </div>
      </div>

      <div
        className="hidden main-background-wrap lg:block"
        style={{
          backgroundImage: `url(${MainBackground})`,
        }}
      >
        <div className="flex justify-between py-6 px-72 hidden lg:flex">
          <Link to="/">
            <img src={titleLogo} alt="logo" style={{ width: 160 }} />
          </Link>
          <div className="gap-12 text-white flex" style={{ fontSize: 16 }}>
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
              >
                레퍼런스
              </Link>
            </div>
            <div className="flex justify-between gap-2">
              <Button
                icon={<ClockCircleOutlined />}
                className="pt-1.5 rounded-lg"
                ghost
                onClick={() => doScroll()}
              >
                예약 문의
              </Button>
            </div>
          </div>
        </div>
        <div className="relative" style={{ minHeight: 800 }}>
          <div style={{ width: "50%" }} className="inline-block">
            <div className="float-right mt-72">
              <div className="mb-2 text-white text-3xl">
                <strong>
                  GS SHOP이 직접 제작하는 라이브커머스 전문 제작 서비스
                </strong>
              </div>
              <div className="text-5xl font-bold text-white leading-tight">
                문래라이브
              </div>
              <div className="mt-6 text-white" style={{ fontSize: 20 }}>
                <div>방송기획, 출연자 섭외, 촬영/송출까지 한 번에!</div>
                <div>
                  홈쇼핑 Live 노하우를 담아 브랜드의 성공을 함께 만들어가고
                  있습니다.
                </div>
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => doScroll("WEB")}
                  size="large"
                  className="mr-4 button-primary-color"
                  style={{
                    borderRadius: 4,
                  }}
                >
                  상담 문의하기
                </Button>
                <Button
                  size="large"
                  className="mr-4 button-reference-color"
                  style={{
                    borderRadius: 4,
                  }}
                >
                  <Link
                    to="/reference"
                    onClick={() => {
                      ReactGA.event({
                        category: "WEB",
                        action: "main-reference",
                        label: "레퍼런스",
                      });
                    }}
                  >
                    레퍼런스 리스트
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          {/* <div style={{ width: "50%" }} className="inline-block">
            <div
              className="float-left"
              style={{ marginLeft: 180, marginBottom: 500 }}
            >
              <div
                className="absolute"
                style={{
                  width: 350,
                }}
              >
                <iframe
                  width="338"
                  height="600"
                  src="https://www.youtube.com/embed/1DcKLBMandU?autoplay=1&mute=1&loop=1&controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
