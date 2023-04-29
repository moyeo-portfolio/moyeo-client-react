import React, { useState } from "react";
import "styles/SkillStack.scss";

import { skillstackDatas } from "static/Datas";

export default function SkillStack({ who }: any): JSX.Element {
  const [focus, setFocus] = useState<number>(0);
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
                      (skillstackIdx === focus
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
