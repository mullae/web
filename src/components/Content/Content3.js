import React from "react";
import RoomBackground from "assets/images/room-background.png";
import { Content5 } from "./Content5";
import MRoomContent from "assets/images/m-room-content.png";
import { Link } from "react-router-dom";

const believeText = [
  "대형 스튜디오",
  "호리존트",
  "모바일 스튜디오",
  "TV-Live 스튜디오",
  "크로마",
  "키친 스튜디오",
];

const goingItems = [
  {
    title: "동아제약 ‘모닝케어’ 라이브커머스 정규편성",
    description: "네이버쇼핑라이브 | 건강기능식품",
    link: "https://shoppinglive.naver.com/replays/288488",
  },
  {
    title: "IOPE 슈퍼바이탈 포텐셜 크림 론칭",
    description: "샤피라이브 | 뷰티",
    link: "http://m.gsshop.com/product/appRedirect.gs?rtnUrl=aHR0cDovL20uZ3NzaG9wLmNvbS9zaG9wL3NlY3Rpb24vbW9iaWxlbGl2ZS93ZWJwbGF5ZXI/b25BaXJJbmZvPU4mbGl2ZT01ODE2JmNoYW5sR2JuQ2Q9QiZ1dG1fc291cmNlPXVybCZ1dG1fbWVkaXVtPXNucyZ1dG1fY2FtcGFpZ249c2hhcmV1cmw=",
  },
  {
    title: "P&G 오랄비 신상품 런칭 SHOW",
    description: "쿠팡라이브 | 라이프",
    link: "https://link.coupang.com/re/NONPROFITLIVE?pageKey=134395&lptag=CFM69806030&pType=live&source=sharedLink&roomId=134395",
  },
  {
    title: "마이셰프 X EBS 홈캠핑 특집",
    description: "쿠팡라이브 | 푸드",
    link: "https://link.coupang.com/re/NONPROFITLIVE?pageKey=129281&lptag=CFM69806030&pType=live&source=sharedLink&roomId=129281",
  },
  {
    title: "Braun 면도기 9 Pro 신상품 기획전",
    description: "쿠팡라이브 | 뷰티",
    link: "https://link.coupang.com/re/NONPROFITLIVE?pageKey=128938&lptag=CFM19833178&pType=live&source=sharedLink&roomId=128938",
  },
  {
    title: "Braun 9 Pro 신상품 런칭 SHOW",
    description: "쿠팡라이브 | 뷰티",
    link: "https://link.coupang.com/re/NONPROFITLIVE?pageKey=128938&lptag=CFM19833178&pType=live&source=sharedLink&roomId=128938",
  },
  {
    title: "P&G 페브리즈 생활용품 라이브",
    description: "쿠팡라이브 | 리빙",
    link: "https://link.coupang.com/re/NONPROFITLIVE?pageKey=127654&lptag=CFM19833178&pType=live&source=sharedLink&roomId=127654",
  },
  {
    title: "청정원 x 삼성 BESPOKE 큐커 협업 라이브",
    description: "삼성몰(소스라이브) | 푸드",
    link: "https://player.sauceflex.com/broadcast/lksamsung-ea59e505dced4cf19a00a591877262a5?",
  },
  {
    title: "동아제약 어린이 가그린 첫 라이브",
    description: "네이버쇼핑라이브 | 리빙",
    link: "https://shoppinglive.naver.com/replays/242801",
  },
  {
    title: "마이셰프・허챠밍 신메뉴 라이브",
    description: "네이버쇼핑라이브 | 푸드",
    link: "https://shoppinglive.naver.com/replays/164331",
  },
  {
    title: "프롬셰프 밀키트 첫 라이브",
    description: "네이버쇼핑라이브 | 푸드",
    link: "https://shoppinglive.naver.com/replays/173352",
  },
];

const goingItems2 = [
  {
    title: "삼성 X 한샘",
    description: "삼성 X 한샘 콜라보 방송 | G마켓 라이브",
    link: "https://sflex.us/YqLRLN",
  },
  {
    title: "삼성 비스포크 김치냉장고",
    description: "삼성 비스포크 김치냉장고 | G마켓 라이브",
    link: "https://player.sauceflex.com/broadcast/lkebay-be48415d863546a989be7883459445f2",
  },
  {
    title: "이니스프리",
    description: "이니스프리 | G마켓 라이브",
    link: "https://sflex.us/KhsuVh",
  },
  {
    title: "아이허브",
    description: "아이허브 | G마켓 라이브",
    link: "https://sflex.us/r6qXuH",
  },
  {
    title: "수입과일",
    description: "수입과일 | G마켓 라이브",
    link: "https://sflex.us/mbJouy",
  },
  {
    title: "배틀그라운드",
    description: "배틀그라운드 신규맵 공개 | G마켓 X 아프리카TV",
    link: "https://sflex.us/6dvJ2R",
  },
];

export const Content3 = () => {
  return (
    <>
      <div className="lg:hidden mt-8">
        <div
          className="room-background-wrap "
          style={{
            backgroundImage: `url(${RoomBackground})`,
            height: 900,
          }}
        >
          <div
            className="room-background-drop"
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: 900,
            }}
          >
            <div>
              <div className="pt-24 text-2xl text-center">
                <div>방송 기획부터</div>
                <div>
                  촬영, 송출, 사후관리까지{" "}
                  <span className="font-bold">한 번에</span>
                </div>
              </div>
              <img
                className="pt-8"
                alt="room"
                src={MRoomContent}
                style={{
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center p-4">
          <div className="text-3xl pt-12 text-center mb-12 font-extrabold primary-color">
            <div className="mb-4">문래라이브를</div>
            <div>믿을 수 있는 이유</div>
          </div>
          <div className="my-12">
            <div className="underline text-xl font-bold mb-3 mt-3">
              확실한 성과를 위한 <span className="brand-color">판매방송​</span>
            </div>
            <div className="font-light">
              ​ 홈쇼핑 경험과 데이터를 기반으로 한 판매방송 기획​
              <br />
              상품의 핵심과 설득을 중심으로 하는 라이브 운영​
            </div>
          </div>
          <div className="my-12">
            <div className="underline text-xl font-bold mb-3 mt-3">
              <span className="brand-color">안정적인 방송</span> 환경
            </div>
            <div className="font-light">
              GS SHOP의 스튜디오에 진행되는 안정적인 방송​
              <br />
              대형 방송에 필요한 압도적인 안정성과 제작/송출 인프라​
            </div>
          </div>
          <div className="my-12">
            <div className="underline text-xl font-bold mb-3 mt-3">
              브랜드 아이덴티티에 걸맞는{" "}
              <span className="brand-color">퀄리티</span>
            </div>
            <div className="font-light">
              브랜드 이미지에 걸맞는 방송연출과 영상 디자인​
              <br />
              뷰티, 라이프스타일 등 상품 특성에 맞는 컨텐츠 송출​
            </div>
          </div>
        </div>

        <div className="my-20">
          <div className="flex flex-col justify-center text-center">
            <div className="font-bold text-4xl text-left ml-4">
              보유 스튜디오
            </div>
            <div className="flex flex-nowrap w-full overflow-x-auto overflow-y-hidden">
              {[3, 2, 1, 4, 5, 6].map((item, index) => (
                <div key={index} className="p-4">
                  <img
                    alt={index}
                    src={require(`assets/images/believe-${item}.jpg`).default}
                    style={{ width: 400 }}
                  />
                  <div className="text-left pt-2 text-xl">
                    {believeText[index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="font-bold text-4xl text-left ml-4">제작현장</div>
            <div className="flex flex-nowrap w-full overflow-x-auto overflow-y-hidden">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
                <div key={index} className="p-4">
                  <img
                    alt={index}
                    src={require(`assets/images/produce-${item}.jpg`).default}
                    style={{ width: 400 }}
                  />
                  <div className="text-left pt-2 text-xl">
                    {believeText[index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="text-2xl text-center font-extrabold primary-color">
            <div>문래라이브에서 진행한</div>
            <div>방송 레퍼런스</div>
          </div>
          <div className="text-center pt-2 pb-8">
            <Link className="underline" to="/reference">
              전체 보기
            </Link>
          </div>

          <div className="mt-2 block">
            <div className="flex flex-nowrap w-full overflow-x-auto overflow-y-hidden mb-20 relative">
              {goingItems2.map((item, index) => (
                <div key={index} className="pr-4">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img
                      alt={index}
                      style={{ width: 240, height: 240 }}
                      className="mb-1"
                      src={
                        require(`assets/images/going2-${index + 1}.jpg`).default
                      }
                    />
                  </a>
                  <div className="font-bold primary-color py-3">
                    {item.title}
                  </div>
                  <div className="font-light">{item.description}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-nowrap w-full overflow-x-auto overflow-y-hidden mb-20 relative">
              {goingItems.map((item, index) => (
                <div key={index} className="pr-4">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img
                      alt={index}
                      style={{ width: 240, height: 240 }}
                      className="mb-1"
                      src={
                        require(`assets/images/going-${index + 1}.png`).default
                      }
                    />
                  </a>
                  <div className="font-bold primary-color py-3">
                    {item.title}
                  </div>
                  <div className="font-light">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex flex-col">
          <div className="flex py-20">
            <div className="believe-mullae pt-24" style={{ width: "50%" }}>
              <div
                className="my-24 text-left tracking-tighter font-extrabold primary-color"
                style={{ fontSize: 48 }}
              >
                문래 라이브를
                <br />
                믿을 수 있는 이유
              </div>
            </div>
            <div className="text-left" style={{ width: "50%" }}>
              <div className="mt-12">
                <div className="underline text-2xl font-bold mb-6 mt-6">
                  확실한 성과를 위한{" "}
                  <span className="brand-color">판매방송​</span>
                </div>
                <div className="font-light" style={{ fontSize: 16 }}>
                  홈쇼핑 경험과 데이터를 기반으로 한 판매방송 기획​ <br />
                  상품의 핵심과 설득을 중심으로 하는 라이브 운영​
                </div>
              </div>
              <div className="mt-12">
                <div className="underline text-2xl font-bold mb-6 mt-6">
                  <span className="brand-color">안정적인 방송</span> 환경
                </div>
                <div className="font-light" style={{ fontSize: 16 }}>
                  GS SHOP의 스튜디오에 진행되는 안정적인 방송​
                  <br />
                  대형 방송에 필요한 압도적인 안정성과 제작/송출 인프라​
                </div>
              </div>
              <div className="mt-12 mb-24">
                <div className="underline text-2xl font-bold mb-6 mt-6">
                  브랜드 아이덴티티에 걸맞는{" "}
                  <span className="brand-color">퀄리티</span>
                </div>
                <div className="font-light" style={{ fontSize: 16 }}>
                  브랜드 이미지에 걸맞는 방송연출과 영상 디자인​
                  <br />
                  뷰티, 라이프스타일 등 상품 특성에 맞는 컨텐츠 송출​
                </div>
              </div>
            </div>
          </div>

          <div className="my-20">
            <div className="flex flex-col justify-center text-center">
              <div className="font-bold text-4xl text-left ml-8">
                보유 스튜디오
              </div>
              <div className="mt-2 block">
                <div className="flex flex-nowrap  px-4 w-full overflow-x-auto overflow-y-hidden mb-20">
                  {[3, 2, 1, 4, 5, 6].map((item, index) => (
                    <div
                      key={index}
                      className="p-4"
                      style={{
                        height: 500,
                      }}
                    >
                      <img
                        alt={index}
                        src={
                          require(`assets/images/believe-${item}.jpg`).default
                        }
                        style={{ width: 800 }}
                      />
                      <div className="text-left pt-2 text-xl">
                        {believeText[index]}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="font-bold text-4xl text-left ml-8">
                  제작현장
                </div>
                <div className="mt-2 block">
                  <div className="flex flex-nowrap  px-4 w-full overflow-x-auto overflow-y-hidden mb-20">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
                      <div
                        key={index}
                        className="p-4"
                        style={{
                          height: 500,
                        }}
                      >
                        <img
                          alt={index}
                          src={
                            require(`assets/images/produce-${item}.jpg`).default
                          }
                          style={{ width: 800 }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Content5 />

          <div className="px-80 mt-32">
            <div className="text-2xl font-extrabold primary-color">
              문래라이브에서 진행한 방송 레퍼런스
            </div>
            <div className="pt-2">
              <Link className="underline" to="/reference">
                전체 보기
              </Link>
            </div>

            <div className="mt-2 block">
              <div className="flex flex-nowrap w-full overflow-x-auto overflow-y-hidden mb-20 relative">
                {goingItems2.map((item, index) => (
                  <div key={index} className="pr-4 pb-4">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <img
                        alt={index}
                        style={{ width: 350, height: 350 }}
                        className="mb-1"
                        src={
                          require(`assets/images/going2-${index + 1}.jpg`)
                            .default
                        }
                      />
                      <div className="font-bold tracking-tighter text-xl primary-color py-3">
                        {item.title}
                      </div>
                      <div className="font-light">{item.description}</div>
                    </a>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap w-full overflow-x-auto overflow-y-hidden mb-20 relative">
                {goingItems.map((item, index) => (
                  <div key={index} className="pr-4 pb-4">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <img
                        alt={index}
                        style={{ width: 350, height: 350 }}
                        className="mb-1"
                        src={
                          require(`assets/images/going-${index + 1}.png`)
                            .default
                        }
                      />
                      <div className="font-bold tracking-tighter text-xl primary-color py-3">
                        {item.title}
                      </div>
                      <div className="font-light">{item.description}</div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
