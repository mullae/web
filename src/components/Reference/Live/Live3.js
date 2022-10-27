import React from "react";
import LiveLogo from "assets/images/refer-live-logo3.png";
import LiveImage1 from "assets/images/live3-1.png";
import LiveImage2 from "assets/images/live3-2.png";

export const Live3 = () => {
  return (
    <>
      <div className="lg:hidden">
        <div>
          <img src={LiveLogo} alt="e" className="py-16 w-3/5 m-0-auto" />
        </div>
        <div className="text-lg px-8 text-left font-bold">
          제품을 돋보이게 하는 디스플레이 ​
        </div>
        <div className="text-lg px-8 text-left font-light">
          이니스프리 라이브 | G마켓 글로벌​
        </div>
        <div className="font-light text-left pt-10 p-8">
          <div className="mb-8 leading-8">
            자연주의를 표방하는 브랜드에 맞게 추가적인 상품 Display를 제공한
            사례입니다. 제품의 매력을 높이는 Display는 브랜드 이미지에 영향을
            주는 요소입니다.
          </div>
          <div className="mb-8 leading-8">
            문래라이브는 다양한 레퍼런스 및 디스플레이 도구를 보유하고 있으며,
            모든 상품군에 맞춰 연출 가능합니다. ​
          </div>
          <div className="leading-8">
            이런 디스플레이가 고객에게 상품과 브랜드의 가치로 다가갈 수 있도록
            연출 하고 있습니다.​
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
                  className="pt-32"
                  style={{ width: 220 }}
                />
              </div>
              <div className="pl-12 pt-36">
                <div className="text-4xl text-left" style={{ fontSize: 36 }}>
                  제품을 돋보이게 하는 디스플레이 ​
                </div>
                <div
                  className="font-light text-lg pt-3"
                  style={{ fontSize: 24 }}
                >
                  이니스프리 라이브 | G마켓 글로벌​
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
                    자연주의를 표방하는 브랜드에 맞게 추가적인 상품 Display를
                    제공한 사례입니다. 제품의 매력을 높이는 Display는 브랜드
                    이미지에 영향을 주는 요소입니다.
                  </div>

                  <div className="mb-8 leading-8">
                    문래라이브는 다양한 레퍼런스 및 디스플레이 도구를 보유하고
                    있으며, 모든 상품군에 맞춰 연출 가능합니다. ​
                  </div>
                  <div className="leading-8">
                    이런 디스플레이가 고객에게 상품과 브랜드의 가치로 다가갈 수
                    있도록 연출 하고 있습니다.​
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
