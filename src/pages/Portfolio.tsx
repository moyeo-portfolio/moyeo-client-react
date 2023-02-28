import React from "react";
import { portfolio_data } from "static/PortfolioData";

function Portfolio(): JSX.Element {
  return (
    <div className="padding-top">
      <div className="center">
        {portfolio_data.map((data: any, idx: number) => {
          return (
            <div key={idx}>
              <div></div>
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
