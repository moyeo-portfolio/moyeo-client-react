import React, { useState } from "react";
import { IPortfoliosProps } from "interface/Portfolio";
import { portfolio_data } from "static/PortfoliosData";

export default function PortfolioDetail({
  what,
  data,
}: IPortfoliosProps): JSX.Element {
  return (
    <div className="portfolio-detail-main">
      {/* <div>{data.name}</div> */}
      {portfolio_data.map((data: any, idx: number) => {
        return (
          <div key={idx} className={"portfolio-detail-box-" + what}>
            <div className="portfolio-detail-top">
              <div>제목 {data}</div>
              <div>간단한 내용</div>
              <div>프레임웍, 언어</div>
            </div>
            <div className="flex">
              <div className={"portfolio-detail-middle-" + what}>
                <div>역할</div>
                <div>시간</div>
                <div>main 그림</div>
              </div>
              <div className={"portfolio-detail-last-" + what}>
                <div>그림</div>
                <div>구현한 것들</div>
                <div>Experience</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
