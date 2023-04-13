import React, { useState } from "react";
import "styles/Developer.scss";

import Ez from "assets/Ez/Ez.png";
import { developerDatas } from "static/Datas";

export default function Developer({ who }: any): JSX.Element {
  return (
    <div className="center-body">
      <div className="center-body-in">
        {developerDatas.map((devData: any, devDataIdx: number) => {
          return (
            who === devDataIdx && (
              <div className="developer-box">
                <div className="left-box">
                  <img className="left-img" src={devData.img} />
                </div>
                <div className="right-box">
                  <div key={devDataIdx}>
                    <div className="right-text">name: {devData.nickname}</div>
                    <div className="right-text">
                      major: <span>{devData.major}</span>
                    </div>
                    <div className="right-text">
                      now: <span>{devData.now}</span>
                    </div>
                    <div className="right-text">
                      email: <span>{devData.email}</span>
                    </div>
                    <div className="right-text">
                      github:&nbsp;
                      <a href="https://github.com/choiyeju" target="_blank">
                        {devData.github}
                      </a>
                    </div>
                    <div className="right-text">
                      blog:&nbsp;
                      <a href="https://velog.io/@cdpwn" target="_blank">
                        {devData.blog}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
