import React from "react";
import LiveLogo from "assets/images/refer-live-logo6.webp";
import LiveImage1 from "assets/images/live6-1.webp";
import LiveImage2 from "assets/images/live6-2.webp";

export const Live6 = () => {
  return (
    <>
      <div className="lg:hidden">
        <div>
          <img src={LiveLogo} alt="e" className="py-16 w-3/5 m-0-auto" />
        </div>
        <div className="text-lg px-8 text-left font-bold">
          출장 촬영 및 모바일 디바이스 미러링 등의 기술 보유
        </div>
        <div className="text-lg px-8 text-left font-light">
          배틀그라운드 라이브 | G마켓 글로벌/아프리카TV
        </div>
        <div className="font-light text-left pt-10 p-8">
          <div className="mb-8 leading-8">
            문래라이브는 다양한 공간에서 전문적인 장비를 동원해 촬영 할 수 있는
            역량을 보유하고 있습니다.
          </div>
          <div className="mb-8 leading-8">
            모바일 서비스 상품 등 무형 상품을 판매하기 위한 무선 모바일 미러링
            기술을 활용하여, 생방송 중 실시간으로 쇼핑호스트가 컨트롤하고 있는
            디바이스의 이미지를 미러링하여 화면에 노출 할 수 있습니다.
          </div>
          <div className="leading-8">
            이는 모바일 화면을 카메라로 담는 것보다 깨끗한 화질을 담보할 수
            있습니다. 이를 통해 명확한 정보를 전달함으로써, 배틀그라운드 라이브
            방송 매출 향상에 기여하였습니다.​
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4">
          <div className="col-span-1">
            <img src={LiveImage1} alt="e" className="w-full" />
          </div>
          <div className="col-span-1">
            <img src={LiveImage2} alt="e" className="w-full" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block px-36 mt-32">
        <div className="flex pl-32 mb-16">
          <div className="pt-4">
            <img
              src={LiveLogo}
              alt="e"
              className="float-right pt-32 mr-8"
              style={{ width: 200 }}
            />
          </div>
          <div className="pt-36">
            <div className="text-4xl text-left" style={{ fontSize: 36 }}>
              출장 촬영 및 모바일 디바이스 미러링 등의 기술 보유
            </div>
            <div className="font-light text-lg pt-3" style={{ fontSize: 24 }}>
              배틀그라운드 라이브 | G마켓 글로벌/아프리카TV
            </div>
          </div>
        </div>
        <div className="flex pl-32">
          <div className="pt-10 pr-16" style={{ width: "50%", fontSize: 16 }}>
            <div className="mb-8 leading-8">
              문래라이브는 다양한 공간에서 전문적인 장비를 동원해 촬영 할 수
              있는 역량을 보유하고 있습니다.​
            </div>
            <div className="mb-8 leading-8">
              모바일 서비스 상품 등 무형 상품을 판매하기 위한 무선 모바일 미러링
              기술을 활용하여, 생방송 중 실시간으로 쇼핑호스트가 컨트롤하고 있는
              디바이스의 이미지를 미러링하여 화면에 노출 할 수 있습니다.​
            </div>
            <div className="leading-8">
              이는 모바일 화면을 카메라로 담는 것보다 깨끗한 화질을 담보할 수
              있습니다. 이를 통해 명확한 정보를 전달함으로써, 배틀그라운드
              라이브 방송 매출 향상에 기여하였습니다.​
            </div>
          </div>
          <div className="flex justify-center" style={{ width: "50%" }}>
            <div style={{ width: 340 }} className="pr-4">
              <img src={LiveImage1} alt="e" className="w-full" />
            </div>
            <div style={{ width: 340 }} className="pr-4">
              <img src={LiveImage2} alt="e" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
