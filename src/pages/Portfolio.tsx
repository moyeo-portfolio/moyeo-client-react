import React, { useEffect, useState } from "react";
import "styles/Portfolio.scss";

import { portfolioDatas } from "static/Datas";

import { ReactComponent as ArrowLeft } from "assets/arrow-left-24.svg";
import { ReactComponent as ArrowRight } from "assets/arrow-right-24.svg";

import IOS from "assets/ios-32.png";
import Android from "assets/android-32.png";
import Internet from "assets/internet-32.png";
import Github from "assets/github-32.png";

export default function Portfolio({
  who,
  pClick,
  setPClick,
  pFocus,
  setPFocus,
}: any): JSX.Element {
  const [click, setClick] = useState<boolean>(false);

  const [resize, setResize] = useState(0);
  const handleResize = () => {
    // if (window.innerHeight < 880) setResize(880);
    // else setResize(window.innerHeight);
    setResize(window.innerHeight);
  };
  useEffect(() => {
    setResize(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="center-body"
      style={{
        height: `calc(100% - ${click ? 0 : 180}px)`,
      }}
    >
      <div className="portfolio-in">
        {portfolioDatas.map((portfolioList: any, portfolioListIdx: number) => {
          return (
            who === portfolioListIdx &&
            portfolioList.map((portfolio: any, portfolioIdx: number) => {
              const len = portfolio.links.length;
              return (
                <div
                  key={portfolioIdx}
                  className={
                    "portfolio-box " +
                    (click && pFocus === portfolioIdx
                      ? "none-shadow "
                      : pFocus === portfolioIdx
                      ? "focus-shadow "
                      : Math.abs(pFocus - portfolioIdx) < 3 && "normal-shadow ")
                  }
                  style={{
                    height:
                      pClick && pFocus === portfolioIdx ? "100%" : "700px",
                    marginTop:
                      pFocus === portfolioIdx
                        ? pClick
                          ? "0px"
                          : `${180 + (resize < 880 ? 0 : resize - 880) / 2}px`
                        : `${180 + (resize < 880 ? 0 : resize - 880) / 2}px`,
                    // opacity: Math.abs(pFocus - portfolioIdx) > 2 ? 0 : 1,

                    left: `calc(50% - ${
                      Math.abs(pFocus - portfolioIdx) === 2
                        ? (202 * (pFocus - portfolioIdx)) / 2
                        : Math.abs(pFocus - portfolioIdx) === 1
                        ? 132 * (pFocus - portfolioIdx)
                        : 0
                    }px)`,
                    opacity:
                      Math.abs(pFocus - portfolioIdx) === 2
                        ? 0.7
                        : Math.abs(pFocus - portfolioIdx) === 1
                        ? 1
                        : 1,

                    zIndex:
                      click && pFocus === portfolioIdx
                        ? 999
                        : 100 - Math.abs(pFocus - portfolioIdx),

                    borderRadius:
                      pClick && pFocus === portfolioIdx ? "0px" : "10px",
                    transition:
                      pFocus === portfolioIdx
                        ? click
                          ? "left 0.5s, border-radius 0.5s, height 0.5s, margin-top 0.5s"
                          : `left 0.5s, border-radius 0.5s, height 0.5s`
                        : `left 0.5s, border-radius 0.5s, height 0.5s`,
                  }}
                  onClick={() => {
                    setPClick(true);
                    setClick(true);
                    setPFocus(portfolioIdx);
                  }}
                >
                  <div
                    className="portfolio-box-in"
                    style={
                      pFocus === portfolioIdx && pClick
                        ? {
                            height: `calc(${resize}px - 64px)`,
                            overflowY: "scroll",
                          }
                        : {}
                    }
                  >
                    <div className="portfolio-project">
                      <span>{portfolio.project}</span> {portfolio.organization}
                    </div>
                    <div className="portfolio-dateActivity">
                      {portfolio.date}
                    </div>
                    <div className="portfolio-dateActivity">
                      {portfolio.activity}
                    </div>

                    {portfolio.skills.map((skill: string, skillIdx: number) => {
                      return (
                        <div key={skillIdx} className="portfolio-skill">
                          {skill}
                        </div>
                      );
                    })}

                    {portfolio.links.map((link: any, linkIdx: number) => {
                      return (
                        <a
                          key={linkIdx}
                          href={link}
                          className={
                            "portfolio-link " +
                            (pClick &&
                              link !== "준비중" &&
                              "portfolio-link-act")
                          }
                          style={{
                            pointerEvents:
                              pClick && link !== "준비중" ? "auto" : "none",
                            cursor:
                              pClick && link !== "준비중" ? "pointer" : "auto",
                          }}
                          target="_blank"
                        >
                          <img
                            src={
                              len === 1
                                ? Internet
                                : linkIdx === 0
                                ? IOS
                                : Android
                            }
                          />
                          {link}
                        </a>
                      );
                    })}
                    <a
                      className={
                        "portfolio-link " + (pClick && "portfolio-link-act")
                      }
                      href={portfolio.githubLink}
                      style={{
                        pointerEvents: pClick ? "auto" : "none",
                        cursor: pClick ? "pointer" : "auto",
                      }}
                      target="_blank"
                    >
                      <img src={Github} />
                      {portfolio.githubLink}
                    </a>

                    <div className="portfolio-imgExplan-box">
                      <div>
                        {len === 1 && (
                          <div
                            className={
                              "portfolio-img portfolio-internet-fstImg"
                            }
                          >
                            <img src={portfolio.images[0]} />
                          </div>
                        )}
                        <div
                          className={
                            "portfolio-img-box" + (len === 1 ? " -gif" : "")
                          }
                        >
                          {portfolio.images.map((img: any, imgIdx: number) => {
                            return len === 1 && imgIdx === 0 ? (
                              <></>
                            ) : (
                              <div
                                key={imgIdx}
                                className={
                                  "portfolio-img portfolio" +
                                  (len === 1 ? "-internet-img" : "-app-img")
                                }
                              >
                                {/* <img src={img} /> */}
                                <img src={img} />
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <ul className="portfolio-explanation">
                        {portfolio.explans.map(
                          (explan: any, explanIdx: number) => {
                            return explan.title === undefined ? (
                              <li key={explanIdx}>{explan}</li>
                            ) : (
                              <div key={explanIdx}>
                                <li>{explan.title}</li>
                                <ul className="portfolio-explanation">
                                  {explan.secExplans.map(
                                    (secExplan: any, secExplanIdx: number) => {
                                      return (
                                        <li key={secExplanIdx}>{secExplan}</li>
                                      );
                                    }
                                  )}
                                </ul>
                              </div>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })
          );
        })}
        {pFocus !== 0 && (
          <div
            className="portfolio-arrow-left"
            style={{
              marginTop: `${
                pClick ? resize / 2 : 180 + (resize - 880) / 2 + 330
              }px`,
              boxShadow: pClick
                ? "0px 0px 0px"
                : "0px 0px 10px rgba(0, 0, 0, 0.7)",
              transition: click ? "margin-top 0.5s" : "",
            }}
            onClick={() => {
              setPFocus(pFocus - 1);
            }}
          >
            <ArrowLeft />
          </div>
        )}
        {pFocus !== portfolioDatas[who].length - 1 && (
          <div
            className="portfolio-arrow-right"
            style={{
              marginTop: `${
                pClick ? resize / 2 : 180 + (resize - 880) / 2 + 330
              }px`,
              boxShadow: pClick
                ? "0px 0px 0px"
                : "0px 0px 10px rgba(0, 0, 0, 0.7)",
              transition: click ? "margin-top 0.5s" : "",
            }}
            onClick={() => {
              setPFocus(pFocus + 1);
            }}
          >
            <ArrowRight />
          </div>
        )}
      </div>
      {click && (
        <div
          className="bg-shadow"
          onClick={() => {
            setPClick(false);
            setTimeout(() => {
              setClick(false);
            }, 500);
          }}
        />
      )}
    </div>
  );
}
