import React, { useState } from "react";
import { IPortfoliosProps } from "interface/Portfolio";
import { portfolio_data } from "static/PortfolioData";

export default function PortfolioDetail({
  data,
}: IPortfoliosProps): JSX.Element {
  return (
    <div>
      <div>{data.name}</div>
      {portfolio_data.map((data: any, idx: number) => {
        return (
          <div key={idx}>
            <div>제목</div>
            <div>간단한 내용</div>
            <div>
              찐 내용
              <div>역할</div>
              <div>시간</div>
              <div>프레임웍, 언어</div>
              <div>그림</div>
              <div>구현한 것들</div>
              <div>Experience</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
