import React from "react";
import LiveLogo from "assets/images/refer-live-logo1.png";
import LiveImage1 from "assets/images/live1-1.png";
import LiveImage2 from "assets/images/live1-2.png";

export const Live1 = () => {
  return (
    <>
      <div className="lg:hidden">
        <div>
          <img src={LiveLogo} alt="e" className="py-16 w-3/5 m-0-auto" />
        </div>
        <div className="text-lg px-8 text-left font-bold">
          두가지 메이저 브랜드의 콜라보 (가구, 로봇청소기)​
        </div>
        <div className="text-lg px-8 text-left font-light">
          삼성 X 한샘 콜라보 라이브 | G마켓 글로벌
        </div>
        <div className="font-light text-left pt-10 p-8">
          <div className="mb-8 leading-8">
            쇼파와 식탁, 로봇청소기 총 3가지의 메인 상품을 균형감있게 소구할 수
            있도록 기획하였습니다. 방송 중 넓은 촬영 공간을 활용하여 모든 제품을
            한 화면에 담았습니다.​
          </div>
          <div className="mb-8 leading-8">
            액션캠 등 다양한 장비를 활용하여 흔히 볼 수 없는 촬영 각도를
            제공하였습니다.
          </div>
          <div className="leading-8">
            고급스러운 화면, 신속한 방송 대응 및 고객 소통으로 매출 향상에
            기여했습니다.​
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4">
          <div className="col-span-1">
            <img src={LiveImage2} alt="e" className="w-full" />
          </div>
          <div className="col-span-1">
            <img src={LiveImage1} alt="e" className="w-full" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="hidden lg:block">
          <div className="px-36">
            <div className="flex pl-32">
              <div>
                <img
                  src={LiveLogo}
                  alt="e"
                  className="pt-36"
                  style={{ width: 220 }}
                />
              </div>
              <div className="pl-12 pt-36">
                <div className="text-4xl text-left" style={{ fontSize: 36 }}>
                  두가지 메이저 브랜드의 콜라보 (가구, 로봇청소기)​
                </div>
                <div
                  className="font-light text-lg pt-3"
                  style={{ fontSize: 24 }}
                >
                  삼성 X 한샘 콜라보 라이브 | G마켓 글로벌
                </div>
              </div>
            </div>
            <div className="flex pl-32">
              <div
                className="flex justify-center mt-16"
                style={{ width: "50%" }}
              >
                <div style={{ width: 340 }} className="pr-4">
                  <img src={LiveImage1} alt="e" className="w-full" />
                </div>

                <div style={{ width: 340 }} className="pr-4">
                  <img src={LiveImage2} alt="e" className="w-full" />
                </div>
              </div>
              <div className="pt-16" style={{ width: "50%" }}>
                <div
                  className="font-light text-xl text-left p-8"
                  style={{ fontSize: 16 }}
                >
                  <div className="mb-8 leading-8">
                    쇼파와 식탁, 로봇청소기 총 3가지의 메인 상품을 균형감있게
                    소구할 수 있도록 기획하였습니다. 방송 중 넓은 촬영 공간을
                    활용하여 모든 제품을 한 화면에 담았습니다.​
                  </div>

                  <div className="mb-8 leading-8">
                    액션캠 등 다양한 장비를 활용하여 흔히 볼 수 없는 촬영 각도를
                    제공하였습니다.
                  </div>
                  <div className="leading-8">
                    고급스러운 화면, 신속한 방송 대응 및 고객 소통으로 매출
                    향상에 기여했습니다.​
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
