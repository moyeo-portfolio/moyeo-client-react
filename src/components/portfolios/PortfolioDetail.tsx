import React, { useState } from "react";
import { IPortfoliosProps } from "interface/Portfolio";
import { portfolio_data } from "static/PortfoliosData";
import { Link } from "react-router-dom";
import axios from "axios";

import test from "assets/test.png";

// styles
const top = "portfolio-detail-top";
const middle = "portfolio-detail-middle";
const last = "portfolio-detail-last";

export default function PortfolioDetail({
  who,
  what,
  data,
}: IPortfoliosProps): JSX.Element {
  return (
    <div className="portfolio-detail-main">
      {/* <div>{data.name}</div> */}
      {portfolio_data[who].data?.map((data: any, idx: number) => {
        const githublink = data.github.link;
        return (
          <div
            key={idx}
            className={"portfolio-detail-box portfolio-detail-box-" + what}
            style={{
              marginLeft: what === 0 ? 10 + 300 * (idx % 4) : 0,
              marginTop: what === 0 ? 420 * Math.floor(idx / 4) : 0,
            }}
          >
            {idx}
            <div className="portfolio-detail-box-in">
              <div className={top}>
                <div className={top + "-title"}>{data.title}</div>
                <div className={top + "-content"}>{data.content}</div>
                <div className={top + "-framework"}>{data.framework}</div>
                <div className={top + "-link"}>
                  <Link to={data.homepage.link} target="_blank">
                    <img src={data.homepage.img} />
                  </Link>
                </div>
                <div className={top + "-githublink"}>
                  <a href={githublink} target="_blank">
                    <img src={data.github.img} />
                    {githublink.split("/")[githublink.split("/").length - 1]}
                    {githublink.split("/")[githublink.split("/").length - 2]}
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className={middle + "-" + what}>
                  <div className={middle + "-role"}>{data.role}</div>
                  <div className={middle + "-time"}>{data.date}</div>
                </div>
                <div className={last + "-" + what}>
                  <div className={last + "-picture"}>{data.img}</div>
                  <div className={last + "-real"}>{data.real}</div>
                  <div className={last + "-experience"}>{data.experience}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
