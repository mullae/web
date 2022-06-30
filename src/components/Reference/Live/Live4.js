import React from "react";
import LiveLogo from "assets/images/company_25.png";
import LiveImage1 from "assets/images/live4-1.png";
import LiveImage2 from "assets/images/live4-2.png";

export const Live4 = () => {
  return (
    <>
      <div className="lg:hidden">
        <div className="room-background-wrap" style={{ height: 900 }}>
          <div className="my-5">
            <img
              src={LiveLogo}
              alt="e"
              style={{ width: "50%", margin: "0 auto" }}
            />
          </div>
          <div className="text-lg pl-8 text-left font-bold">
            홈쇼핑 심의 노하우 활용!
          </div>
          <div className="text-lg pl-8 text-left font-light">
            아이허브 라이브 | G마켓 글로벌
          </div>
          <div className="font-light text-left pt-10 p-8">
            <div className="mb-8 leading-8">
              건강기능식품, 의료기기, 주류 등 심의가 어려운 상품군이 있습니다.
              문래라이브는 홈쇼핑 업력을 통해 심의 프로세스에 강점이 있습니다. ​
            </div>
            <div className="mb-8 leading-8">
              아이허브는 사전에 큐시트로 내부 심의팀을 통해 검토를
              진행하였습니다. 이를 기반으로 라이브 진행 채널 및 고객사와 확인 후
              출연자들과 긴밀한 소통을 하였습니다. ​
            </div>
            <div className="leading-8">
              홈쇼핑 내부 심의와 동일한 규정안에서 검토할 수 있다는 장점을 적극
              활용 가능합니다.​
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
              홈쇼핑 심의 노하우 활용!
            </div>
            <div className="font-light text-lg pt-3" style={{ fontSize: 24 }}>
              아이허브 라이브 | G마켓 글로벌
            </div>
          </div>
        </div>
        <div className="flex pl-32">
          <div className="pt-10 pr-16" style={{ width: "50%", fontSize: 16 }}>
            <div className="mb-8 leading-8">
              건강기능식품, 의료기기, 주류 등 심의가 어려운 상품군이 있습니다.
              문래라이브는 홈쇼핑 업력을 통해 심의 프로세스에 강점이 있습니다. ​
            </div>
            <div className="mb-8 leading-8">
              아이허브는 사전에 큐시트로 내부 심의팀을 통해 검토를
              진행하였습니다. 이를 기반으로 라이브 진행 채널 및 고객사와 확인 후
              출연자들과 긴밀한 소통을 하였습니다. ​
            </div>
            <div className="leading-8">
              홈쇼핑 내부 심의와 동일한 규정안에서 검토할 수 있다는 장점을 적극
              활용 가능합니다.​
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
