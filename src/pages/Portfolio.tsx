import React, { useEffect, useState } from "react";
import "styles/Portfolio.scss";

import { portfolioDatas } from "static/Datas";

export default function Portfolio({
  who,
  pClick,
  setPClick,
  pFocus,
  setPFocus,
}: any): JSX.Element {
  const [click, setClick] = useState<boolean>(false);

  const [resize, setResize] = useState(0);
  const handleResize = () => {
    if (window.innerHeight < 880) setResize(880);
    else setResize(window.innerHeight);
  };
  useEffect(() => {
    setResize(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="center-body"
      style={{
        height: `calc(100% - ${click ? 0 : 180}px)`,
      }}
    >
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
                    (click && pFocus === portfolioIdx
                      ? "none-shadow "
                      : pFocus === portfolioIdx
                      ? "focus-shadow "
                      : Math.abs(pFocus - portfolioIdx) < 3 && "normal-shadow ")
                  }
                  style={{
                    height:
                      pClick && pFocus === portfolioIdx ? "100%" : "700px",
                    marginTop:
                      pFocus === portfolioIdx
                        ? pClick
                          ? "0px"
                          : `${180 + (resize - 880) / 2}px`
                        : `${180 + (resize - 880) / 2}px`,
                    opacity: Math.abs(pFocus - portfolioIdx) > 2 ? 0 : 1,

                    left: `calc(50% - ${
                      Math.abs(pFocus - portfolioIdx) === 2
                        ? (202 * (pFocus - portfolioIdx)) / 2
                        : Math.abs(pFocus - portfolioIdx) === 1
                        ? 132 * (pFocus - portfolioIdx)
                        : 0
                    }px)`,

                    zIndex:
                      click && pFocus === portfolioIdx
                        ? 999
                        : 100 - Math.abs(pFocus - portfolioIdx),

                    borderRadius:
                      pClick && pFocus === portfolioIdx ? "0px" : "10px",
                    transition:
                      pFocus === portfolioIdx
                        ? click
                          ? "left 0.5s, border-radius 0.5s, height 0.5s, margin-top 0.5s"
                          : `left 0.5s, border-radius 0.5s, height 0.5s`
                        : `left 0.5s, border-radius 0.5s, height 0.5s`,
                  }}
                  onClick={() => {
                    setPClick(true);
                    setClick(true);
                    setPFocus(portfolioIdx);
                  }}
                ></div>
              );
            })
          );
        })}
        {pFocus !== 0 && (
          <div
            className="portfolio-arrow-left"
            style={{
              marginTop: `${
                pClick ? resize / 2 : 180 + (resize - 880) / 2 + 330
              }px`,
              boxShadow: pClick
                ? "0px 0px 0px"
                : "0px 0px 10px rgba(0, 0, 0, 0.7)",
              transition: click ? "margin-top 0.5s" : "",
            }}
            onClick={() => {
              setPFocus(pFocus - 1);
            }}
          />
        )}
        {pFocus !== portfolioDatas[who].length - 1 && (
          <div
            className="portfolio-arrow-right"
            style={{
              marginTop: `${
                pClick ? resize / 2 : 180 + (resize - 880) / 2 + 330
              }px`,
              boxShadow: pClick
                ? "0px 0px 0px"
                : "0px 0px 10px rgba(0, 0, 0, 0.7)",
              transition: click ? "margin-top 0.5s" : "",
            }}
            onClick={() => {
              setPFocus(pFocus + 1);
            }}
          />
        )}
      </div>
      {click && (
        <div
          className="bg-shadow"
          onClick={() => {
            setPClick(false);
            setTimeout(() => {
              setClick(false);
            }, 500);
          }}
        />
      )}
    </div>
  );
}
