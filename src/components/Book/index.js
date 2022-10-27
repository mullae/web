import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Button,
  Radio,
  Input,
  Checkbox,
  DatePicker,
  Row,
  Col,
  notification,
} from "antd";
import { products, platforms, hosts } from "lib";

const { Title } = Typography;
const openNotification = (placement = "bottomRight") => {
  notification.success({
    message: "상담예약완료",
    description:
      "문래라이브에 성공적으로 예약이 완료되었습니다. 빠른 시일안에 연락드리겠습니다.",
    placement,
  });
};

const gs_cred = require("./sheet.json");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const doc = new GoogleSpreadsheet(
  "1JVUx5cUBIs6vaDcy5cbgKZBn3UKTouk5mcUgBaylX9I"
);

export const Book = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [productCategory, setProductCategory] = useState("fashion");
  const [broadPlatform, setBroadPlatform] = useState([]);
  const [playHost, setPlayHost] = useState("1인");
  const [productURL, setProductURL] = useState([""]);

  const onSubmit = async () => {
    setIsLoading(true);
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      name,
      phone,
      email,
      company,
      date,
      productURL,
      productCategory,
      broadPlatform: broadPlatform.join(","),
      playHost,
    });
    setIsLoading(false);
    openNotification();
  };

  useEffect(() => {
    const auth = async () => {
      await doc.useServiceAccountAuth(gs_cred);
      await doc.loadInfo(); // loads document properties and worksheets
    };
    auth();
  }, []);
  return (
    <div className="App">
      <Card
        headStyle={{
          textAlign: "center",
          border: "none",
          fontSize: 42,
          fontWeight: "bold",
        }}
        title="상담 예약하기"
        style={{
          width: 820,
          background: "transparent",
          border: "none",
        }}
      >
        <div className="step step-1">
          <Title level={4} style={{ marginBottom: 20 }}>
            STEP1. 기본 정보를 입력해주세요.
          </Title>
          <div>
            <div>
              <Title level={5} style={{ marginBottom: 10 }}>
                상품 카테고리
              </Title>

              <Radio.Group
                defaultValue={productCategory}
                size="large"
                style={{ marginBottom: 40 }}
                onChange={(e) => setProductCategory(e.target.value)}
              >
                {products.map((item, index) => (
                  <Radio.Button key={index} value={item}>
                    {item}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </div>
            <div>
              <Title level={5} style={{ marginBottom: 10 }}>
                송출 플랫폼
              </Title>

              <Checkbox.Group
                options={platforms}
                defaultValue={[]}
                style={{ marginBottom: 40 }}
                onChange={(checkedValues) => {
                  setBroadPlatform(checkedValues);
                }}
              />
            </div>
            <div>
              <Title level={5} style={{ marginBottom: 10 }}>
                진행자 수
              </Title>

              <Radio.Group
                defaultValue={playHost}
                size="large"
                style={{ marginBottom: 40 }}
                onChange={(e) => setPlayHost(e.target.value)}
              >
                {hosts.map((item, index) => (
                  <Radio.Button key={index} value={item.name}>
                    {item.name}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </div>
            <div>
              <Title level={5} style={{ marginBottom: 10 }}>
                대표 상품 URL
              </Title>

              <Input
                placeholder="상품 URL을 입력해주세요."
                size="large"
                value={productURL}
                onChange={(e) => setProductURL(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="step step-1" style={{ marginTop: 100 }}>
          <Title level={4} style={{ marginBottom: 20 }}>
            STEP2. 담당자 연락처를 남겨주세요.
          </Title>
          <div>
            <div>
              <Title level={5} style={{ marginBottom: 10 }}>
                희망 촬영일*
              </Title>
              <DatePicker
                size="large"
                onChange={(date, dateString) => setDate(dateString)}
                placeholder="2022년 00월 00일"
                style={{
                  width: 200,
                }}
              />
            </div>
            <div>
              <Input.Group size="large" style={{ marginTop: 40 }}>
                <Row gutter={8}>
                  <Col span={12}>
                    <Title level={5} style={{ marginBottom: 10 }}>
                      이름*
                    </Title>
                    <Input
                      placeholder="예약자 성함을 알려주세요."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Col>
                  <Col span={12}>
                    <Title level={5} style={{ marginBottom: 10 }}>
                      회사명*
                    </Title>
                    <Input
                      placeholder="회사명을 알려주세요."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </Col>
                </Row>
              </Input.Group>
              <Input.Group size="large" style={{ marginTop: 40 }}>
                <Row gutter={8}>
                  <Col span={12}>
                    <Title level={5} style={{ marginBottom: 10 }}>
                      전화번호*
                    </Title>
                    <Input
                      placeholder="연락 받을 전화번호를 남겨주세요."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Col>
                  <Col span={12}>
                    <Title level={5} style={{ marginBottom: 10 }}>
                      이메일*
                    </Title>
                    <Input
                      placeholder="이메일을 남겨주세요"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </Row>
              </Input.Group>
            </div>
            <div style={{ marginTop: 30, textAlign: "right" }}>
              <Button
                type="primary"
                size="large"
                onClick={() => onSubmit()}
                loading={isLoading}
              >
                상담 예약하기
              </Button>
            </div>
            <div style={{ marginTop: 30 }}>
              * 개인 정보는 예약 확인 목적으로만 사용되며, 스튜디오 이용 이후
              즉시 폐기됩니다.
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
