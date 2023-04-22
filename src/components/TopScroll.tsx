import React, { useEffect, useRef, useState } from "react";
import { developerDatas } from "static/Datas";
import "styles/TopScroll.scss";

interface Props {}

export default function TopScroll({ who, setWho }: any): JSX.Element {
  const [startMove, setStartMove] = useState<number>(0);
  const [scroll, setScroll] = useState<number>(150 + who * 50); // 하나당 150

  const handleLeft = () => {
    setWho((scroll - 100) / 50);
    setScroll(scroll + 50);
  };
  const handleRight = () => {
    setWho((scroll - 100) / 50);
    setScroll(scroll - 50);
  };

  return (
    <div
      className="topscroll"
      onMouseDown={(e) => {
        setStartMove(e.clientX);
      }}
      onMouseMove={(e) => {}}
      onMouseUpCapture={(e) => {
        const move = startMove - e.clientX;
        if (move >= 0 && scroll !== 150 - (developerDatas.length - 1) * 50)
          handleRight();
        else if (move <= 0 && scroll !== 150) handleLeft();
      }}
    >
      <div className="center-body">
        <div className="topscroll-in">
          <div
            style={{
              display: "flex",
              transform: `translateX(${scroll}%)`,
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
          {scroll !== 150 && (
            <div className="arrow-left-box">
              <div className="arrow-left" onClick={handleLeft} />
            </div>
          )}
          <div className="main-developer" />
          {scroll !== 150 - (developerDatas.length - 1) * 50 && (
            <div className="arrow-right-box">
              <div className="arrow-right" onClick={handleRight} />
            </div>
          )}
          <div className="gradation gradation-right" />
        </div>
      </div>
    </div>
  );
}
