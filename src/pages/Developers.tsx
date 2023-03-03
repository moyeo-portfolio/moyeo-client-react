import React, { useState } from "react";
import DeveloperDetail from "components/developers/DeveloperDetail";
import "styles/Developers.scss";
import { IDevelopers } from "interface/Developers";
import { developers, developersDetail } from "static/DevelopersData";
import TopSlide from "components/TopSlide";

export default function Developers(): JSX.Element {
  const [who, setWho] = useState(0);

  return (
    <div className="padding-top">
      <div className="center">
        <div className="developer-main">
          <TopSlide state={{ who: who, setWho: setWho }} />
          {/* <div className="developer-middle-box">
            {developersDetail.map((data: IDevelopers, idx: number) => {
              return (
                idx === who && (
                  <div key={idx} className="developer-middle-box-in">
                    <DeveloperDetail data={data} />
                  </div>
                )
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
}
