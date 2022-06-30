import React from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const Title = ({ prop }) => (
  <div>
    <div className="float-left mr-4">
      <CaretRightOutlined />
    </div>
    <div style={{ fontSize: 18 }}>{prop}</div>
  </div>
);
const Mtitle = ({ prop }) => (
  <div className="grid grid-cols-10 gap-2">
    <div className="col-span-1">
      <CaretRightOutlined />
    </div>
    <div className="col-span-9">{prop}</div>
  </div>
);

export const Content6 = () => {
  return (
    <>
      <div className="lg:hidden">
        <div className="flex flex-col justify-center text-center p-4">
          <div
            style={{
              border: "2px solid #967961",
            }}
          >
            <div className="text-center text-2xl py-10 font-bold">
              자주 묻는 질문
            </div>
            <Collapse
              bordered={false}
              ghost={false}
              className="text-left"
              style={{
                borderRadius: 10,
              }}
              expandIcon={() => null}
            >
              <Panel
                header={
                  <Mtitle prop="라이브커머스가 처음인데, 방송 기획부터 쇼핑호스트 컨택, 촬영, 송출까지 모두 도와주시나요?" />
                }
                key="faq-1"
              >
                <p className="m-faq-content">
                  네, 모두 가능합니다.
                  <br />
                  제품/서비스에 맞는 차별화된 콘셉 도출부터 연출에 적합한
                  쇼핑호스트 섭외 지원, 높은 퀄리티의 라이브 촬영과 진행,
                  송출까지 All-in-one 서비스로 제공해드립니다. 자체 역량을
                  보유하고 계실 경우, 상담을 통해 견적 조정도 가능합니다.
                </p>
              </Panel>
              <Panel
                header={
                  <Mtitle prop="여러 라이브커머스 플랫폼에 동시 송출이 가능한가요?" />
                }
                key="faq-2"
              >
                <p className="m-faq-content">
                  네, 모두 가능합니다.
                  <br />
                  네이버쇼핑라이브, 쿠팡 라이브 등 주요 라이브커머스 플랫폼에
                  송출이 가능하며, 2개 이상 플랫폼에 동시 송출 경험을 가지고
                  있습니다. 여러 플랫폼 동시 송출을 통해 보다 많은 사용자 뷰와
                  주문을 확보하실 수 있습니다.
                </p>
              </Panel>
              <Panel
                header={<Mtitle prop="방송 일정은 어떻게 정해지나요?" />}
                key="faq-3"
              >
                <p className="m-faq-content">
                  노하우를 바탕으로 최적의 시간을 제안해드립니다. 스튜디오는
                  365일 24시간 운영되며, 원하시는 방송 일정을 고려하여 상담을
                  통해 조율하실 수 있습니다.
                </p>
              </Panel>
              <Panel
                header={
                  <Mtitle prop="방송 기획부터 촬영일까지 준비기간이 얼마나 소요될까요?" />
                }
                key="faq-4"
              >
                <p className="m-faq-content">
                  기본으로 2주 정도 소요됩니다만, 상황에 따라 자유롭게 조율하실
                  수 있습니다.
                </p>
              </Panel>
              <Panel
                header={<Mtitle prop="출장 촬영 및 방송진행도 가능한가요?" />}
                key="faq-5"
              >
                <p className="m-faq-content">
                  네, 가능합니다.
                  <br />
                  스튜디오 외의 장소에서도 스튜디오와 동일한 퀄리티의 방송 촬영
                  및 송출을 지원하고 있습니다. 상담을 통해 원하시는 장소의
                  네트워크 등 방송 송출 환경을 검토 후 진행여부를 확정할 수
                  있습니다.
                </p>
              </Panel>
              <Panel
                header={<Mtitle prop="스튜디오 사전 답사가 가능한가요?" />}
                key="faq-6"
              >
                <p className="m-faq-content">
                  네, 가능합니다.
                  <br />
                  문의하기를 통해 연락 주시면 1영업일 내로 답사 일정을 조율할 수
                  있습니다. (단, 코로나 거리두기 단계 지침에 따라 방문인원수에
                  제약이 있을 수 있습니다.)
                </p>
              </Panel>
              <Panel
                header={<Mtitle prop="가격은 어떻게 되나요?" />}
                key="faq-7"
              >
                <p className="m-faq-content">
                  방송 기획부터 촬영과 진행, 송출까지 패키지로 제공해드리며
                  원하시는 요청 사항 추가/제외 여부에 따라 견적이 달라집니다.
                  자세한 내용은 상담을 요청해주시면 1영업일 내로 담당자를 통해
                  연락드리겠습니다.
                </p>
              </Panel>
              <Panel
                header={
                  <Mtitle prop="스튜디오 대관 및 장비 대여만도 가능한가요?" />
                }
                key="faq-8"
              >
                <p className="m-faq-content">
                  네. Daytime (9시~17시)에는 저희 스튜디오 방문하셔서 공간,
                  장비만 대여하여 사용하시는 것도 가능합니다. 자세한 내용은 상담
                  예약 남겨주세요.
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>

      <div className="mt-32 mb-20 flex flex-col justify-center items-center hidden lg:flex">
        <div className="flex flex-col justify-center text-center">
          <div
            className="px-20"
            style={{
              border: "2px solid #967961",
            }}
          >
            <div
              className="text-center pt-20 font-bold"
              style={{ fontSize: 36 }}
            >
              자주 묻는 질문
            </div>
            <Collapse
              bordered={false}
              ghost={false}
              className="pt-10 pb-20 text-left"
              expandIcon={() => null}
            >
              <Panel
                header={
                  <Title prop="라이브커머스가 처음인데, 방송 기획부터 쇼핑호스트 컨택, 촬영, 송출까지 모두 도와주시나요?" />
                }
                key="faq-1"
              >
                <p className="faq-content">
                  네, 모두 가능합니다.
                  <br />
                  제품/서비스에 맞는 차별화된 콘셉 도출부터 연출에 적합한
                  쇼핑호스트 섭외 지원, 높은 퀄리티의 라이브 촬영과 진행,
                  송출까지 All-in-one 서비스로 제공해드립니다. 자체 역량을
                  보유하고 계실 경우, 상담을 통해 견적 조정도 가능합니다.
                </p>
              </Panel>
              <Panel
                header={
                  <Title prop="여러 라이브커머스 플랫폼에 동시 송출이 가능한가요?" />
                }
                key="faq-2"
              >
                <p className="faq-content">
                  네, 모두 가능합니다.
                  <br />
                  네이버쇼핑라이브, 쿠팡 라이브 등 주요 라이브커머스 플랫폼에
                  송출이 가능하며, 2개 이상 플랫폼에 동시 송출 경험을 가지고
                  있습니다. 여러 플랫폼 동시 송출을 통해 보다 많은 사용자 뷰와
                  주문을 확보하실 수 있습니다.
                </p>
              </Panel>
              <Panel
                header={<Title prop="방송 일정은 어떻게 정해지나요?" />}
                key="faq-3"
              >
                <p className="faq-content">
                  노하우를 바탕으로 최적의 시간을 제안해드립니다. 스튜디오는
                  365일 24시간 운영되며, 원하시는 방송 일정을 고려하여 상담을
                  통해 조율하실 수 있습니다.
                </p>
              </Panel>
              <Panel
                header={
                  <Title prop="방송 기획부터 촬영일까지 준비기간이 얼마나 소요될까요?" />
                }
                key="faq-4"
              >
                <p className="faq-content">
                  기본으로 2주 정도 소요됩니다만, 상황에 따라 자유롭게 조율하실
                  수 있습니다.
                </p>
              </Panel>
              <Panel
                header={<Title prop="출장 촬영 및 방송진행도 가능한가요?" />}
                key="faq-5"
              >
                <p className="faq-content">
                  네, 가능합니다.
                  <br />
                  스튜디오 외의 장소에서도 스튜디오와 동일한 퀄리티의 방송 촬영
                  및 송출을 지원하고 있습니다. 상담을 통해 원하시는 장소의
                  네트워크 등 방송 송출 환경을 검토 후 진행여부를 확정할 수
                  있습니다.
                </p>
              </Panel>
              <Panel
                header={<Title prop="스튜디오 사전 답사가 가능한가요?" />}
                key="faq-6"
              >
                <p className="faq-content">
                  네, 가능합니다.
                  <br />
                  문의하기를 통해 연락 주시면 1영업일 내로 답사 일정을 조율할 수
                  있습니다. (단, 코로나 거리두기 단계 지침에 따라 방문인원수에
                  제약이 있을 수 있습니다.)
                </p>
              </Panel>
              <Panel
                header={<Title prop="가격은 어떻게 되나요?" />}
                key="faq-7"
              >
                <p className="faq-content">
                  방송 기획부터 촬영과 진행, 송출까지 패키지로 제공해드리며
                  원하시는 요청 사항 추가/제외 여부에 따라 견적이 달라집니다.
                  자세한 내용은 상담을 요청해주시면 1영업일 내로 담당자를 통해
                  연락드리겠습니다.
                </p>
              </Panel>
              <Panel
                header={
                  <Title prop="스튜디오 대관 및 장비 대여만도 가능한가요?" />
                }
                key="faq-8"
              >
                <p className="faq-content">
                  네. Daytime (9시~17시)에는 저희 스튜디오 방문하셔서 공간,
                  장비만 대여하여 사용하시는 것도 가능합니다. 자세한 내용은 상담
                  예약 남겨주세요.
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
};
