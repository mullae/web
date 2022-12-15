import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import animateScrollTo from "animated-scroll-to";
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
        {/* <div className="flex justify-between py-6 px-72 hidden lg:flex">
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
        </div> */}
        <div className="relative" style={{ minHeight: 600 }}>
          <div style={{ width: "50%" }} className="inline-block">
            <div className="float-right mt-32">
              <div className="mb-2 text-white text-3xl">
                <strong>
                  GS SHOP이 서비스하는 프리미엄 라이브커머스 방송​
                </strong>
              </div>
              <div className="text-5xl font-bold text-white leading-tight">
                문래라이브
              </div>
              <div className="mt-6 text-white" style={{ fontSize: 20 }}>
                <div>
                  판매전략, 방송기획, 출연자 섭외, 방송제작과 마케팅까지 한
                  번에-​
                </div>
                <div>
                  라이브 홈쇼핑의 노하우를 담아, 성공적인 라이브커머스 방송을
                  만들어갑니다.
                </div>
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => doScroll("WEB")}
                  className="mr-4 button-primary-color"
                  style={{
                    borderRadius: 4,
                    height: 50,
                    width: 160,
                    fontSize: 18,
                  }}
                >
                  상담 문의하기
                </Button>
                <Button
                  className="mr-4 button-reference-color"
                  style={{
                    borderRadius: 4,
                    height: 50,
                    width: 160,
                    fontSize: 18,
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
        </div>
      </div>
    </>
  );
};
