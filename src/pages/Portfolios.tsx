import React, { useState } from "react";
import PortfolioDetail from "components/portfolios/PortfolioDetail";
import { IPortfolios } from "interface/Portfolio";

import { developers } from "static/DevelopersData";
import { portfoliosDetail } from "static/PortfoliosData";
import TopSlide from "components/TopSlide";

export default function Portfolios(): JSX.Element {
  const [who, setWho] = useState(0);

  return (
    <div className="padding-top">
      <div className="center">
        <div>
          <button>리스트</button>
          <button>개별</button>
        </div>
        <TopSlide state={{ who: who, setWho: setWho }} />
        {portfoliosDetail.map((data: IPortfolios, idx: number) => {
          return (
            idx === who && (
              <div key={idx}>
                <PortfolioDetail data={data} />
              </div>
            )
          );
        })}

        {/* 시간순/구현경험/기여도,
      각각에 대한 설명(모달) */}
      </div>
    </div>
  );
}
