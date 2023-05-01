import React, { useState } from "react";
import "styles/SkillStack.scss";

import { skillstackDatas } from "static/Datas";

export default function SkillStack({
  who,
  sFocus,
  setSFocus,
}: any): JSX.Element {
  return (
    <div className="center-body">
      <div className="stillstack-in">
        {skillstackDatas.map(
          (skillstackList: any, skillstackListIdx: number) => {
            return (
              who === skillstackListIdx &&
              skillstackList.map((skillstack: any, skillstackIdx: number) => {
                return (
                  <div
                    key={skillstackIdx}
                    className={
                      "stillstack-box " +
                      (skillstackIdx === sFocus
                        ? "focus-shadow "
                        : "normal-shadow ")
                    }
                  >
                    <div></div>
                  </div>
                );
              })
            );
          }
        )}
      </div>
    </div>
  );
}
