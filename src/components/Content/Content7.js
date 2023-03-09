import React, { useState, useEffect } from "react";
import { Button, Input, DatePicker, notification, message } from "antd";
import ReactGA from "react-ga";
import moment from "moment";
import axios from "axios";

const { TextArea } = Input;

const openNotification = (placement) => {
  notification.success({
    message: "상담예약완료",
    description:
      "문래라이브에 성공적으로 예약이 완료되었습니다. 빠른 시일안에 연락드리겠습니다.",
    placement,
  });
};

const sendTeamsMessage = async (item) => {
  const headers = {
    "Content-type": "application/x-www-form-urlencoded",
  };
  try {
    const { data } = await axios({
      method: "post",
      url: "https://gsretail.webhook.office.com/webhookb2/0138ef25-8c59-47fc-b876-04b2ed47a877@4645c25c-9775-4d77-a736-700fab766116/IncomingWebhook/4d42b840ecb54823870d68f110b835c8/1be2498b-7949-4e40-9114-0dd8cc915a31",
      headers: headers,
      data: {
        "@type": "MessageCard",
        "@context": "http://schema.org/extensions",
        themeColor: "0076D7",
        summary: "문래라이브 상담예약이 등록되었습니다",
        sections: [
          {
            activityTitle: "문래라이브 상담예약이 등록되었습니다",
            facts: [
              {
                name: "이름",
                value: item.name,
              },
              {
                name: "연락처",
                value: item.phone,
              },
              {
                name: "이메일",
                value: item.email,
              },
              {
                name: "브랜드명",
                value: item.company,
              },
              {
                name: "희망날짜",
                value: item.date,
              },
              {
                name: "문의하기",
                value: item.etc,
              },
            ],
            markdown: true,
          },
        ],
        potentialAction: [
          {
            "@type": "OpenUri",
            name: "구글 시트",
            targets: [
              {
                os: "default",
                uri: "https://docs.google.com/spreadsheets/d/1JVUx5cUBIs6vaDcy5cbgKZBn3UKTouk5mcUgBaylX9I/edit#gid=0",
              },
            ],
          },
        ],
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const gs_cred = require("./sheet.json");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const doc = new GoogleSpreadsheet(
  "1JVUx5cUBIs6vaDcy5cbgKZBn3UKTouk5mcUgBaylX9I"
);
export const Content7 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [etc, setEtc] = useState("");

  const onSubmit = async (device) => {
    if (name === "") {
      message.error("이름을 입력해주세요");
      return false;
    }
    if (phone === "") {
      message.error("전화번호를 입력해주세요");
      return false;
    }
    if (email === "") {
      message.error("이메일 입력해주세요");
      return false;
    }
    if (company === "") {
      message.error("회사명을 입력해주세요");
      return false;
    }
    if (date === "") {
      message.error("희망촬영일 입력해주세요");
      return false;
    }

    ReactGA.event({
      category: device,
      action: "main-submit",
      label: "상담예약완료",
    });
    setIsLoading(true);
    const sheet = doc.sheetsByIndex[0];
    let t = {
      name: name ? name : "-",
      phone: phone ? phone : "-",
      email: email ? email : "-",
      company: company ? company : "-",
      date: date ? date : "-",
      etc: etc ? etc : "-",
      regdate: moment().format("YYYY-MM-DD HH:mm"),
    };
    await sheet.addRow(t);
    setIsLoading(false);
    openNotification("bottom");
    setName("");
    setCompany("");
    setPhone("");
    setEmail("");
    setEtc("");
    await sendTeamsMessage(t);
  };

  useEffect(() => {
    const auth = async () => {
      await doc.useServiceAccountAuth(gs_cred);
      await doc.loadInfo(); // loads document properties and worksheets
    };
    auth();
  }, []);
  return (
    <>
      <div id="content-7" className="book-wrap">
        <div className="lg:hidden">
          <div className="text-center text-2xl py-10">상담 예약</div>
          <div className="p-4">
            <div className="my-2">희망 촬영일 * (미정시 근처 날짜로 지정)</div>
            <DatePicker
              size="large"
              className="w-full"
              placeholder="2023년 00월 00일"
              onChange={(_, dateString) => setDate(dateString)}
            />

            <div className="my-2">이름 *</div>
            <Input
              placeholder="예약자 성함을 알려주세요."
              size="large"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="my-2">회사명 *</div>
            <Input
              placeholder="회사명을 알려주세요."
              size="large"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <div className="my-2">전화번호 *</div>
            <Input
              placeholder="연락 받을 전화번호를 남겨주세요."
              size="large"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="my-2">이메일 *</div>
            <Input
              placeholder="이메일을 남겨주세요."
              size="large"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="my-2">문의하기</div>
            <TextArea
              rows={4}
              placeholder="희망일정 / 판매상품 / 요청사항 / 스튜디오 대관문의"
              value={etc}
              onChange={(e) => setEtc(e.target.value)}
            />

            <div className="text-center text-gray-400 py-10">
              개인 정보는 예약 확인 목적으로만 사용되며
              <br />
              스튜디오 이용 이후 즉시 폐기됩니다.
              <div className="py-10">
                <Button
                  size="large"
                  className="text-bold"
                  onClick={() => onSubmit("MOBILE")}
                  loading={isLoading}
                >
                  등록하기
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="text-center py-20 font-bold" style={{ fontSize: 36 }}>
            상담 예약
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 book-content mt-20">
            <div className="col-span-1">
              <div className="mb-2" style={{ fontSize: 16 }}>
                희망 촬영일 * (미정시 근처 날짜로 지정)
              </div>
              <DatePicker
                size="large"
                className="w-full"
                placeholder="2023년 00월 00일"
                onChange={(_, dateString) => setDate(dateString)}
                style={{
                  width: 300,
                }}
              />
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <div className="mb-2" style={{ fontSize: 16 }}>
                이름 *
              </div>
              <Input
                placeholder="예약자 성함을 알려주세요."
                size="large"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <div className="mb-2" style={{ fontSize: 16 }}>
                회사명 *
              </div>
              <Input
                placeholder="회사명을 알려주세요."
                size="large"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <div className="mb-2" style={{ fontSize: 16 }}>
                전화번호 *
              </div>
              <Input
                placeholder="연락 받을 전화번호를 남겨주세요."
                size="large"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <div className="mb-2" style={{ fontSize: 16 }}>
                이메일 *
              </div>
              <Input
                placeholder="이메일을 남겨주세요."
                size="large"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <div className="mb-2" style={{ fontSize: 16 }}>
                문의하기
              </div>
              <TextArea
                rows={4}
                placeholder="희망일정 / 판매상품 / 요청사항 / 스튜디오 대관문의"
                value={etc}
                onChange={(e) => setEtc(e.target.value)}
              />
            </div>
          </div>

          <div className="text-center text-1xl text-gray-400 py-10">
            개인 정보는 예약 확인 목적으로만 사용되며, 스튜디오 이용 이후 즉시
            폐기됩니다.
            <div className="py-10">
              <Button
                size="large"
                className="text-bold"
                onClick={() => onSubmit("WEB")}
                loading={isLoading}
              >
                등록하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
