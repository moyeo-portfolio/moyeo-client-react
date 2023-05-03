import React, { useEffect, useRef, useState } from "react";
import { developerDatas } from "static/Datas";
import "styles/TopScroll.scss";

import { ReactComponent as ArrowLeft } from "assets/arrow-left-24.svg";
import { ReactComponent as ArrowRight } from "assets/arrow-right-24.svg";

export default function TopScroll({
  setWho,
  setPFocus,
  setSFocus,
}: any): JSX.Element {
  const [scroll, setScroll] = useState<number>(0); // 하나당 150

  const handleLeft = () => {
    setScroll(scroll + 150);
    setWho(Math.abs((scroll + 150) / 150));
    setPFocus(0);
    setSFocus(0);
  };
  const handleRight = () => {
    setScroll(scroll - 150);
    setWho(Math.abs((scroll - 150) / 150));
    setPFocus(0);
    setSFocus(0);
  };

  return (
    <div
      className="topscroll"
      // onMouseDown={(e) => {
      //   setStartMove(e.clientX);
      // }}
      // onMouseMove={(e) => {}}
      // onMouseUpCapture={(e) => {
      //   const move = startMove - e.clientX;
      //   if (move >= 0 && scroll !== 150 - (developerDatas.length - 1) * 50)
      //     handleRight();
      //   else if (move <= 0 && scroll !== 150) handleLeft();
      // }}
    >
      <div className="center-body">
        <div className="topscroll-in">
          <div
            style={{
              display: "flex",
              marginLeft: "450px",
              transform: `translateX(${scroll}px)`,
              transition: "0.5s ease",
            }}
          >
            {developerDatas.map((devData: any, devDataIdx: number) => {
              return (
                <div key={devDataIdx} className="nickname-box-in">
                  <div className="nickname">{devData.nickname}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="gradation-box">
          <div className="gradation gradation-left" />
          {scroll !== 0 && (
            <div className="topscroll-arrow-left-box">
              <div className="topscroll-arrow-left" onClick={handleLeft}>
                <ArrowLeft width={16} height={16} />
              </div>
            </div>
          )}
          <div className="main-developer" />
          {scroll !== (developerDatas.length - 1) * -150 && (
            <div className="topscroll-arrow-right-box">
              <div className="topscroll-arrow-right" onClick={handleRight}>
                <ArrowRight width={16} height={16} />
              </div>
            </div>
          )}
          <div className="gradation gradation-right" />
        </div>
      </div>
    </div>
  );
}
