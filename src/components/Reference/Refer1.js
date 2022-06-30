import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { Header } from "../Nav";
import { Spin, Space } from "antd";

const getReferenceItems = () => {
  return new Promise((resolve) => {
    axios
      .get(
        "https://mullaelive-cors.herokuapp.com/https://api.notion.com/v1/blocks/675199c6-44f6-4e67-acb0-0013414807c6/children",
        {
          headers: {
            Authorization:
              "Bearer secret_Gq59FAz6n6C4f7Xh1bLjPqWnoZKuV8uZ4cz9hVPwa22",
            "Notion-Version": "2021-08-16",
          },
        }
      )
      .then((res) => {
        resolve(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

// const getReferenceItems = async () => {
//   // const items = await getNotionItems();
//   return new Promise((resolve) => {
//     axios
//       .get("/api/reference")
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// };

const convertItem = (items) => {
  if (items.length === 0) {
    return [];
  }

  let newItems = [];
  let temp = {};

  for (let i in items) {
    let item = items[i];
    if (i % 2 === 0) {
      if (item.paragraph !== undefined && item.paragraph.text.length === 0) {
        continue;
      }
      temp = {};
      temp.image_url = item.image.file.url;
    } else if (i % 2 === 1) {
      const t = item.paragraph.text[0].plain_text.split("///");
      temp.title = t[0];
      temp.live = t[1];

      temp.url =
        item.paragraph.text[1] !== undefined
          ? item.paragraph.text[1].plain_text
          : "";

      newItems.push(temp);
    }
  }
  return newItems;
};

export const Refer1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 3000,
  };
  const mSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 3000,
    customPaging: () => {},
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getReferenceItems();
      setData(convertItem(response));
    })();
  }, []);
  return (
    <>
      <div className="lg:hidden">
        <Header />
        <div className="py-6 text-xl text-center font-extrabold">지난 방송</div>
        <div className="relative">
          <Slider {...mSettings}>
            {data.map((item, index) => (
              <div key={index}>
                <div className="py-8">
                  {item.url !== undefined ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <img
                        alt={index}
                        src={item.image_url}
                        style={{
                          width: 200,
                          borderRadius: 14,
                          margin: "0 auto",
                        }}
                      />
                    </a>
                  ) : (
                    <img
                      alt={index}
                      src={item.image_url}
                      style={{ width: 200, borderRadius: 14, margin: "0 auto" }}
                    />
                  )}
                  <div className="text-center mt-4">
                    <div className="font-bold text-xl">{item.title}</div>
                    <div>{item.live}</div>
                    {item.live.indexOf(",") !== -1 ? <div>동시송출</div> : null}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="hidden lg:block">
        <Header />
        <div className="py-12 text-center font-bold" style={{ fontSize: 36 }}>
          지난 방송
        </div>
        <div className="relative">
          {data.length === 0 ? (
            <Space className="flex justify-center" size="middle">
              <Spin size="large" />
            </Space>
          ) : (
            ""
          )}
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <div className="py-8">
                  {item.url !== undefined ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <img
                        alt={index}
                        src={item.image_url}
                        style={{
                          width: 200,
                          borderRadius: 14,
                          margin: "0 auto",
                        }}
                      />
                    </a>
                  ) : (
                    <img
                      alt={index}
                      src={item.image_url}
                      style={{ width: 200, borderRadius: 14, margin: "0 auto" }}
                    />
                  )}

                  <div className="text-center mt-4">
                    <div className="font-bold text-xl">{item.title}</div>
                    <div>{item.live}</div>
                    {item.live.indexOf(",") !== -1 ? <div>동시송출</div> : null}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
