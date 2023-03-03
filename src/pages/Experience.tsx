import Backend from "components/Experience/Backend";
import Frontend from "components/Experience/Frontend";
import React, { useState } from "react";

function Experience(): JSX.Element {
  const [what, setWhat] = useState(0);
  const ExperienceComponents = [<Frontend />, <Backend />];

  return (
    <div className="padding-top">
      <div className="center">
        <div>
          {["Frontend", "Backend"].map((data: string, idx: number) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  setWhat(idx);
                }}
              >
                {data}
              </div>
            );
          })}
        </div>
        <div className="main-hr" />
        {ExperienceComponents.map((data: JSX.Element, idx: number) => {
          return idx === what && <div key={idx}>{data}</div>;
        })}
        {/* CMC 구현 경험 참고 */}
      </div>
    </div>
  );
}

export default Experience;
