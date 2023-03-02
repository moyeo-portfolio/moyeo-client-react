import React from "react";
import { portfolio_data } from "static/PortfolioData";

function Portfolio(): JSX.Element {
  return (
    <div className="padding-top">
      <div className="center">
        <div>
          <button>리스트</button>
          <button>개별</button>
        </div>
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
        {/* 시간순/구현경험/기여도,
      각각에 대한 설명(모달) */}
      </div>
    </div>
  );
}

export default Portfolio;
