import React, { useState } from "react";
import "styles/Portfolio.scss";

import { skillstackDatas } from "static/Datas";

export default function SkillStack({ who }: any): JSX.Element {
  return (
    <div className="center-body">
      <div className="center-body-in developer-in">
        {skillstackDatas.map((skillstack: any, skillstackIdx: number) => {
          return (
            who === skillstackIdx &&
            skillstack.map((data: any, idx: number) => {
              console.log(data);
              return (
                <div key={skillstackIdx} className="portfolio-box">
                  {/* <div className="left-box">
                    <img className="left-img" src={portfolio.img} />
                  </div> */}
                  {/* <div className="right-box">
                    <div key={portfolioIdx}>
                      <div className="right-text">name: {portfolio.nickname}</div>
                      <div className="right-text">
                        major: <span>{portfolio.major}</span>
                      </div>
                      <div className="right-text">
                        now: <span>{portfolio.now}</span>
                      </div>
                      <div className="right-text">
                        email: <span>{portfolio.email}</span>
                      </div>
                      <div className="right-text">
                        github:&nbsp;
                        <a href="https://github.com/choiyeju" target="_blank">
                          {portfolio.github}
                        </a>
                      </div>
                      <div className="right-text">
                        blog:&nbsp;
                        <a href="https://velog.io/@cdpwn" target="_blank">
                          {portfolio.blog}
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
              );
            })
          );
        })}
      </div>
    </div>
  );
}
