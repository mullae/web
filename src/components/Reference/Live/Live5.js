import React from "react";
import LiveLogo from "assets/images/refer-live-logo5.png";
import LiveImage1 from "assets/images/live5-1.png";
import LiveImage2 from "assets/images/live5-2.png";

export const Live5 = () => {
  return (
    <>
      <div className="lg:hidden">
        <div>
          <img src={LiveLogo} alt="e" className="py-16 w-3/5 m-0-auto" />
        </div>
        <div className="text-lg px-8 text-left font-bold">
          TV홈쇼핑 카메라/연출 노하우 활용​​
        </div>
        <div className="text-lg px-8 text-left font-light">
          수입과일 라이브 | G마켓 글로벌​
        </div>
        <div className="font-light text-left pt-10 p-8">
          <div className="mb-8 leading-8">
            홈쇼핑 방송의 노하우를 모바일라이브로 적용 하였습니다.​
          </div>
          <div className="leading-8">
            드라이아이스를 활용한 신선도 표현, 당도 및 사이즈를 카메라 연출,
            소품 활용 및 그래픽으로 특화하여 연출 했습니다.
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
                  className="pt-36 mr-8"
                  style={{ width: 200 }}
                />
              </div>
              <div className="pt-36">
                <div className="text-4xl text-left" style={{ fontSize: 36 }}>
                  TV홈쇼핑 카메라/연출 노하우 활용​
                </div>
                <div
                  className="font-light text-lg pt-3"
                  style={{ fontSize: 24 }}
                >
                  수입과일 라이브 | G마켓 글로벌​
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
                    홈쇼핑 방송의 노하우를 모바일라이브로 적용 하였습니다.​
                  </div>
                  <div className="leading-8">
                    드라이아이스를 활용한 신선도 표현, 당도 및 사이즈를 카메라
                    연출, 소품 활용 및 그래픽으로 특화하여 연출 했습니다.
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
