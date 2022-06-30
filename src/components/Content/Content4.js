import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const refrenceItems = [
  {
    name: "refer-philips",
    title: "필립스 면도기 Q9000 신상품 런칭 라이브",
    logo: ["coupang-live-logo"],
    description: [
      "콘텐츠 기획 및 라이브 촬영, 진행",
      "고퀄리티 소품, 세트 디자인",
      "최신 장비와 기술 사용해 고화질 방송 송출",
      "크로마를 활용한 바버샵 완벽 재현",
      "방송 퀄리티 개선으로 매출 향상에 기여",
    ],
  },
  {
    name: "refer-fromchef",
    title: "프롬셰프 라이브커머스 최초 진행",
    logo: ["naver-shopping-live-logo", "shoppy-live-logo"],
    description: [
      "HMR 제품에 걸맞는 방송 콘셉트 제안",
      "콘텐츠 기획 및 라이브 촬영, 진행",
      "연출에 적합한 쇼핑호스트 섭외 지원",
      "스튜디오 내 키친 공간 활용",
      "원소스 멀티 유즈, 매끄러운 동시 송출",
    ],
  },
  {
    name: "refer-mychef",
    title: "마이셰프X허챠밍 콜라보 런칭 라이브",
    logo: ["naver-shopping-live-logo"],
    description: [
      "콘텐츠 기획 및 라이브 촬영, 진행",
      "고퀄리티 소품, 세트 디자인",
      "최신 장비와 기술 사용해 고화질 방송 송출",
      "인플루언서 영향력을 극대화하는 분위기 연출",
      "스튜디오 내 키친 공간 활용",
    ],
  },
];
export const Content4 = () => {
  return (
    <>
      <div className="lg:hidden mb-20">
        <div className="text-2xl pt-12 text-center font-bold">
          방송 레퍼런스
        </div>
        <div className="underline text-center pt-3 text-1xl text-gray-400">
          <Link to="/reference">지난 방송보기</Link>
        </div>

        <Carousel
          className="pt-12"
          interval={5000}
          autoPlay={true}
          infiniteLoop={true}
          emulateTouch={true}
          renderArrowPrev={() => {}}
          renderArrowNext={() => {}}
          showStatus={false}
          showThumbs={false}
        >
          {refrenceItems.map((item, index) => (
            <div key={index}>
              <div>
                <img
                  style={{
                    width: "70%",
                    borderRadius: 14,
                  }}
                  alt="4"
                  src={require(`../../assets/images/${item.name}.png`).default}
                />
              </div>

              <ul className="mt-12">
                {item.description.map((desc, key) => (
                  <li key={key} className="text-left ml-8 py-1">
                    <span className="mr-3">✔️</span>
                    <span className="text-base font-light">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="mt-12 mb-20 flex flex-col justify-center items-center hidden lg:flex">
        <div className="font-bold primary-color" style={{ fontSize: 36 }}>
          방송 레퍼런스
        </div>
        <div className="mt-4 mb-24 underline" style={{ fontSize: 16 }}>
          <Link to="/reference">지난 방송보기</Link>
        </div>

        <Carousel
          emulateTouch={true}
          interval={5000}
          autoPlay={true}
          infiniteLoop={true}
          renderArrowPrev={() => {}}
          renderArrowNext={() => {}}
          showStatus={false}
          showThumbs={false}
        >
          {refrenceItems.map((item, index) => (
            <div key={index} className="w-full">
              <div style={{ width: "50%" }} className="inline-block">
                <div className="float-right">
                  <img
                    className="float-right"
                    alt="4"
                    src={
                      require(`../../assets/images/${item.name}.png`).default
                    }
                    style={{
                      width: 280,
                    }}
                  />
                </div>
              </div>
              <div style={{ width: "50%" }} className="inline-block">
                <div className="float-left text-left ml-20 mb-20">
                  <div
                    className="text-3xl font-bold"
                    style={{ fontSize: 28, marginTop: -80 }}
                  >
                    {item.title}
                  </div>

                  <div className="flex flex-row justify-start">
                    {item.logo.map((logoImage, key) => (
                      <img
                        key={key}
                        className="mt-2 ref-logo-image"
                        alt={`ref-${key}`}
                        src={
                          require(`../../assets/images/${logoImage}.png`)
                            .default
                        }
                      />
                    ))}
                  </div>
                  <ul className="ref-description mt-12">
                    {item.description.map((desc, key) => (
                      <li key={key} style={{ fontSize: 18 }}>
                        <span className="mr-4">✔️</span>
                        <span className="font-light">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
