import React, { useState } from "react";
import "styles/Portfolio.scss";

import { portfolioDatas } from "static/Datas";

export default function Portfolio({
  who,
  pFocus,
  setPFocus,
}: any): JSX.Element {
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
                    (pFocus === portfolioIdx
                      ? "focus-shadow "
                      : Math.abs(pFocus - portfolioIdx) < 3 && "normal-shadow ")
                  }
                  style={{
                    opacity: Math.abs(pFocus - portfolioIdx) > 2 ? 0 : 1,
                    left: `calc(50% - ${
                      Math.abs(pFocus - portfolioIdx) === 2
                        ? (202 * (pFocus - portfolioIdx)) / 2
                        : Math.abs(pFocus - portfolioIdx) === 1
                        ? 132 * (pFocus - portfolioIdx)
                        : 0
                    }px)`,
                    zIndex: 100 - Math.abs(pFocus - portfolioIdx),
                    transition: "0.5s ease",
                  }}
                ></div>
              );
            })
          );
        })}
        {pFocus !== 0 && (
          <div
            className="portfolio-arrow-left"
            onClick={() => {
              setPFocus(pFocus - 1);
            }}
          />
        )}
        {pFocus !== portfolioDatas[who].length - 1 && (
          <div
            className="portfolio-arrow-right"
            onClick={() => {
              setPFocus(pFocus + 1);
            }}
          />
        )}
      </div>
    </div>
  );
}
