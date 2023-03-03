import React, { useEffect, useState } from "react";
import DeveloperDetail from "components/developers/DeveloperDetail";
import "styles/Developers.scss";
import { IDevelopers } from "interface/Developers";
import { developers, developersDetail } from "static/DevelopersData";

interface Props {
  state: {
    who: number;
    setWho: Function;
  };
}

export default function TopSlide({ state }: Props): JSX.Element {
  useEffect(() => {}, [state.who]);

  return (
    <div className="main-hr">
      <div className="flex">
        {developers.map((data: string, idx: number) => {
          return (
            <div
              key={idx}
              className={
                "developer-top-nickname developer-top-nickname" +
                (idx === state.who && "-act")
              }
              onClick={() => {
                state.setWho(idx);
                // for (let i = state.who; i < idx + 1; i++) {
                //   setTimeout(() => {
                //     state.setWho(i);
                //   }, 1000);
                // }
              }}
            >
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
}
