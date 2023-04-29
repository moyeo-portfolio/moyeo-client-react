import React, { useState } from "react";
import "styles/Portfolio.scss";

import { portfolioDatas } from "static/Datas";

export default function Portfolio({ who }: any): JSX.Element {
  const [focus, setFocus] = useState<any>(0);

  return (
    <div className="center-body">
      <div className="portfolio-in">
        {portfolioDatas.map((portfolioList: any, portfolioListIdx: number) => {
          return (
            who === portfolioListIdx &&
            portfolioList.map((portfolio: any, portfolioIdx: number) => {
              return (
                <div
                  key={portfolioIdx}
                  className={
                    "portfolio-box " +
                    (focus === portfolioIdx
                      ? "focus-shadow "
                      : Math.abs(focus - portfolioIdx) < 3 && "normal-shadow ")
                  }
                  style={{
                    opacity: Math.abs(focus - portfolioIdx) > 2 ? 0 : 1,
                    left: `calc(50% - ${
                      Math.abs(focus - portfolioIdx) === 2
                        ? (202 * (focus - portfolioIdx)) / 2
                        : Math.abs(focus - portfolioIdx) === 1
                        ? 132 * (focus - portfolioIdx)
                        : 0
                    }px)`,
                    zIndex: 100 - Math.abs(focus - portfolioIdx),
                  }}
                >
                  <div></div>
                </div>
              );
            })
          );
        })}
      </div>
    </div>
  );
}
