import React from "react";
import Image from "assets/images/refer-2-content.png";
import mImage from "assets/images/m-refer-2-content.png";

// import Image1 from "assets/images/company_1.png";
// import Image2 from "assets/images/company_2.png";
// import Image3 from "assets/images/company_3.png";
// import Image4 from "assets/images/company_4.png";
// import Image5 from "assets/images/company_5.png";
// import Image6 from "assets/images/company_6.png";
// import Image7 from "assets/images/company_7.png";
// import Image8 from "assets/images/company_8.png";
// import Image9 from "assets/images/company_9.png";
// import Image10 from "assets/images/company_10.png";
// import Image11 from "assets/images/company_11.png";
// import Image12 from "assets/images/company_12.png";
// import Image13 from "assets/images/company_13.png";
// import Image14 from "assets/images/company_14.png";
// import Image15 from "assets/images/company_15.png";
// import Image16 from "assets/images/company_16.png";
// import Image17 from "assets/images/company_17.png";
// import Image18 from "assets/images/company_18.png";
// import Image19 from "assets/images/company_19.png";
// import Image20 from "assets/images/company_20.png";
// import Image21 from "assets/images/company_21.png";
// import Image22 from "assets/images/company_22.png";
// import Image23 from "assets/images/company_23.png";
// import Image24 from "assets/images/company_24.png";
// import Image25 from "assets/images/company_25.png";
// import Image26 from "assets/images/company_26.png";
// import Image27 from "assets/images/company_27.png";
// import Image28 from "assets/images/company_28.png";
// import Image29 from "assets/images/company_29.png";
// import Image30 from "assets/images/company_30.png";
// import Image31 from "assets/images/company_31.png";
// import Image32 from "assets/images/company_32.png";

// const logo1 = [
//   {
//     name: "oralb",
//     krName: "오랄비",
//     url: Image1,
//     link: "https://link.coupang.com/nt/LIVECO?pageKey=122909&pType=live&source=sharedLink",
//   },
//   {
//     name: "braun",
//     krName: "브라운",
//     url: Image2,
//     link: "https://link.coupang.com/nt/LIVECO?pageKey=122896&pType=live&source=sharedLink",
//   },
//   {
//     name: "itsskin",
//     krName: "잇츠스킨",
//     url: Image3,
//     link: "https://shoppinglive.naver.com/replays/119402",
//   },
//   {
//     name: "mychef",
//     krName: "마이셰프",
//     url: Image4,
//     link: "https://shoppinglive.naver.com/replays/138749",
//   },
//   {
//     name: "phlips",
//     krName: "필립스",
//     url: Image5,
//     link: "https://link.coupang.com/nt/LIVECO?pageKey=123232&pType=live&source=sharedLink",
//   },
//   { name: "coreana", krName: "코리아나", url: Image6, link: "" },
// ];
// const logo2 = [
//   { name: "pg", krName: "P&G", url: Image7, link: "" },
//   { name: "think", krName: "개념원리", url: Image8, link: "" },
//   {
//     name: "fromchef",
//     krName: "프롬셰프",
//     url: Image9,
//     link: "https://shoppinglive.naver.com/replays/173352",
//   },
//   {
//     name: "food",
//     krName: "집반찬연구소",
//     url: Image10,
//     link: "http://naver.me/GxOhuEwM",
//   },
//   { name: "zespa", krName: "제스파", url: Image11, link: "" },
//   {
//     name: "drg",

//     krName: "닥터지",
//     url: Image12,
//     link: "https://link.coupang.com/nt/LIVECO?pageKey=116534&pType=live&source=sharedLink",
//   },
// ];
// const logo3 = [
//   {
//     name: "reqm",
//     krName: "레퀴엠",
//     url: Image13,
//     link: "https://shoppinglive.naver.com/replays/135379",
//   },
//   { name: "w", krName: "W", url: Image14, link: "" },
//   { name: "wecook", krName: "위쿡", url: Image15, link: "" },
//   { name: "nutri", krName: "뉴트리그램", url: Image16, link: "" },
//   {
//     name: "play",
//     krName: "플레이커머스",
//     url: Image17,
//     link: "https://link.coupang.com/nt/LIVECO?pageKey=115088&pType=live&source=",
//   },
//   {
//     name: "ample",
//     krName: "앰플",
//     url: Image18,
//     link: "https://link.coupang.com/nt/LIVECO?pageKey=116869&pType=live&source=",
//   },
// ];
// const logo4 = [
//   { name: "goldpang", krName: "골드팡", url: Image19, link: "" },
//   { name: "novita", krName: "노비타", url: Image20, link: "" },
//   { name: "daewoong", krName: "대웅제약", url: Image21, link: "" },
//   { name: "donga", krName: "동아제약", url: Image22, link: "" },
//   { name: "dongwon", krName: "동원", url: Image23, link: "" },
//   { name: "samsung", krName: "삼성", url: Image24, link: "" },
// ];
// const logo5 = [
//   { name: "iherb", krName: "아이허브", url: Image25, link: "" },
//   { name: "oseolock", krName: "오설록", url: Image26, link: "" },
//   { name: "innisfree", krName: "이니스프리", url: Image27, link: "" },
//   { name: "queenit", krName: "퀸잇", url: Image28, link: "" },
//   { name: "pubg", krName: "펍지", url: Image29, link: "" },
//   { name: "han", krName: "한샘", url: Image30, link: "" },
// ];
// const logo6 = [
//   { name: "gmarket", krName: "지마켓", url: Image31, link: "" },
//   { name: "gsshop", krName: "GS홈쇼핑", url: Image32, link: "" },
// ];

export const Refer2 = () => {
  return (
    <>
      <div className="lg:hidden">
        <img alt="e" src={mImage} className="w-full" />
        <div className="grid grid-cols-4 gap-4 mb-16 mt-4 px-8">
          {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(
            (item) => (
              <div key={`m-key-${item}`}>
                <img
                  alt={item}
                  src={require(`assets/images/logo-${item}.jpg`).default}
                  className="mr-8 pt-4"
                  style={{ width: "100%", display: "inline" }}
                />
              </div>
            )
          )}
        </div>
      </div>
      <div className="hidden lg:block mt-24">
        <img alt="e" src={Image} className="w-full" />
        <div className="flex flex-col items-center justify-center mt-24">
          <div className="grid grid-cols-4">
            {[
              1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            ].map((item) => (
              <div key={`key-${item}`} style={{ margin: "0 auto" }}>
                <img
                  alt={item}
                  src={require(`assets/images/logo-${item}.jpg`).default}
                  className="mr-8"
                  style={{
                    maxWidth: 180,
                    display: "inline",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
