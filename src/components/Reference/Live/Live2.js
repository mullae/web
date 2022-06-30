import React from "react";
import LiveLogo from "assets/images/logo-7.jpg";
import LiveImage1 from "assets/images/live2-1.png";
import LiveImage2 from "assets/images/live2-2.png";

export const Live2 = () => {
  return (
    <>
      <div className="lg:hidden">
        <div className="room-background-wrap" style={{ height: 900 }}>
          <div>
            <img src={LiveLogo} alt="e" style={{ margin: "0 auto" }} />
          </div>
          <div className="text-lg pl-8 text-left font-bold">
            제품 CF 활용한 방송 연출
          </div>
          <div className="text-lg pl-8 text-left font-light">
            삼성 비스포크 라이브 | G마켓 클로벌
          </div>
          <div className="font-light text-left pt-10 p-8">
            <div className="mb-8 leading-8">
              비스포크 TV CF의 컨셉을 모바일라이브에 연계한 방송화면을 연출
              했습니다. 자막, 화면 디자인, 배너 디자인, 화면전환 효과 모두
              고객사와 소통하여 디자인하였습니다.
            </div>
            <div className="leading-8">
              스튜디오 세트 디자인도 넓은 공간을 활용해 효과를 극대화 했으며,
              이러한 임팩트있는 연출/디자인을 통해 매출 향상에 기여했습니다.​
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
      </div>
      <div className="hidden lg:block px-36 mt-32">
        <div className="flex pl-32 mb-16">
          <div>
            <img
              src={LiveLogo}
              alt="e"
              className="float-right pt-32 mr-8"
              style={{ width: 200 }}
            />
          </div>
          <div className="pt-36">
            <div className="text-4xl text-left" style={{ fontSize: 36 }}>
              제품 CF 활용한 방송 연출
            </div>
            <div className="font-light text-lg pt-3" style={{ fontSize: 24 }}>
              삼성 비스포크 라이브 | G마켓 클로벌
            </div>
          </div>
        </div>
        <div className="flex pl-32">
          <div className="pt-10 pr-16" style={{ width: "50%", fontSize: 16 }}>
            <div className="mb-8 leading-8">
              비스포크 TV CF의 컨셉을 모바일라이브에 연계한 방송화면을 연출
              했습니다. 자막, 화면 디자인, 배너 디자인, 화면전환 효과 모두
              고객사와 소통하여 디자인하였습니다.
            </div>
            <div className="leading-8">
              스튜디오 세트 디자인도 넓은 공간을 활용해 효과를 극대화 했으며,
              이러한 임팩트있는 연출/디자인을 통해 매출 향상에 기여했습니다.​
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
