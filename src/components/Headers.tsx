import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "styles/Header.scss";
import logo from "assets/logo.png";

import { DeveloperUrl, PortfolioUrl, SkillStackUrl } from "Router";

export default function Headers({ menu, setMenu }: any): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="center-head header-in">
        <span
          className="header-logo"
          onClick={() => {
            navigate(`/`);
          }}
        >
          <img src={logo} />
        </span>
        <div className="header-menu">
          <div className={"header-menu-in " + (menu === 0 && "header-border")}>
            <Link
              to={DeveloperUrl}
              onClick={() => {
                setMenu(0);
              }}
            >
              Developer
            </Link>
          </div>
          <div className={"header-menu-in " + (menu === 1 && "header-border")}>
            <Link
              to={PortfolioUrl}
              onClick={() => {
                setMenu(1);
              }}
            >
              Portfolio
            </Link>
          </div>
          <div className={"header-menu-in " + (menu === 2 && "header-border")}>
            <Link
              to={SkillStackUrl}
              onClick={() => {
                setMenu(2);
              }}
            >
              Skill&Stack
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
