import Backend from "components/Experience/Backend";
import Frontend from "components/Experience/Frontend";
import React, { useState } from "react";

export default function SkillStack(): JSX.Element {
  return (
    <div className="center-body">
      <div className="center-body-in">
        <div className="developer-box">
          <div className="left-box">
            {/* <img className="left-img" src={Ez} /> */}
          </div>
          <div className="right-box">
            <div className="right-text">name: Ez</div>
            <div className="right-text">
              major: <span>Soongsil University</span>
            </div>
            <div className="right-text">
              now: <span>graduation preagreement</span>
            </div>
            <div className="right-text">
              email: <span>yeju1019@gmail.com</span>
            </div>
            <div className="right-text">
              github:&nbsp;
              <a href="https://github.com/choiyeju" target="_blank">
                https://github.com/choiyeju
              </a>
            </div>
            <div className="right-text">
              blog:&nbsp;
              <a href="https://velog.io/@cdpwn" target="_blank">
                https://velog.io/@cdpwn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
