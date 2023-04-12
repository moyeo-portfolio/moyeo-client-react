import React, { useState } from "react";
import DeveloperDetail from "components/developers/DeveloperDetail";
import "styles/Developers.scss";
import { IDevelopers } from "interface/Developers";
import { developers, developersDetail } from "static/DevelopersData";
import TopSlide from "components/TopScroll";

export default function Developers(): JSX.Element {
  const [who, setWho] = useState(0);

  return (
    <div className="padding-top">
      <div className="center">
        <div className="developer-main">
          <div className="fake-top-slide"></div>
          <div className="developer-middle-box">
            {developersDetail.map((data: IDevelopers, idx: number) => {
              return (
                idx === who && (
                  <div key={idx} className="developer-middle-box-in">
                    <DeveloperDetail data={data} />
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div>
          <div>안녕하세요</div>
          <div>안녕하세요</div>
          <div>안녕하세요</div>
        </div>
      </div>
    </div>
  );
}
