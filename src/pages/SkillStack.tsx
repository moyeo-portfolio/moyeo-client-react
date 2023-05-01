import React, { useState } from "react";
import "styles/SkillStack.scss";

import { skillstackDatas } from "static/Datas";

export default function SkillStack({
  who,
  sFocus,
  setSFocus,
}: any): JSX.Element {
  const [num, setNum] = useState<number>(0);
  const reload = () => {
    setNum(num + 1);
  };
  const [zIndex, setZIndex] = useState<number>(999);

  return (
    <>
      <div className="padding-top" />
      <div className="center-body skillstack">
        <div
          className="skillstack-in"
          onMouseOver={() => {
            setZIndex(-1);
            reload();
          }}
          onMouseLeave={() => {
            setZIndex(999);
            reload();
          }}
        >
          <div
            className="skillstack-cover"
            style={{
              zIndex: zIndex,
            }}
          />
          {skillstackDatas.map(
            (skillstackList: any, skillstackListIdx: number) => {
              return (
                who === skillstackListIdx &&
                skillstackList.map((skillstack: any, skillstackIdx: number) => {
                  return (
                    <div
                      key={skillstackIdx}
                      className={
                        "skillstack-box " +
                        (skillstackIdx === sFocus
                          ? "focus-shadow "
                          : "normal-shadow ")
                      }
                      onClick={() => {
                        setSFocus(skillstackIdx);
                      }}
                    ></div>
                  );
                })
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
