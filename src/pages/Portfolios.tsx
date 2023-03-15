import React, { useState } from "react";
import PortfolioDetail from "components/portfolios/PortfolioDetail";
import { IPortfolios } from "interface/Portfolio";
import "styles/Portfolios.scss";

import { portfoliosDetail } from "static/PortfoliosData";
import TopSlide from "components/TopSlide";

export default function Portfolios(): JSX.Element {
  const [who, setWho] = useState(0);
  const [what, setWhat] = useState(0);

  return (
    <div className="padding-top">
      <div className="center">
        <div className="portfolios-main">
          <TopSlide state={{ who: who, setWho: setWho }} />
          <div className="fake-top-slide"></div>
          <div className="portfolios-right">
            <button
              onClick={() => {
                setWhat(0);
              }}
            >
              전체적
            </button>
            <button
              onClick={() => {
                setWhat(1);
              }}
            >
              개별
            </button>
            {/* <button
              onClick={() => {
                setWhat(2);
              }}
            >
              리스트
            </button> */}
          </div>
          {portfoliosDetail.map((data: IPortfolios, idx: number) => {
            return (
              idx === who && (
                <div key={idx}>
                  <PortfolioDetail who={who} what={what} data={data} />
                </div>
              )
            );
          })}

          {/* 시간순/구현경험/기여도,
          각각에 대한 설명(모달) */}
        </div>
      </div>
    </div>
  );
}
