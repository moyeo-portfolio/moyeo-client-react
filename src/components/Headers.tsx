import React from "react";
import { Link } from "react-router-dom";
import "styles/Header.scss";
import logo from "assets/logo.png";

import { DeveloperUrl, PortfolioUrl, SkillStackUrl } from "Router";

export default function Headers(): JSX.Element {
  return (
    <div className="header">
      <div className="center header-in">
        <span className="header-logo">
          <img src={logo} />
        </span>
        <div className="header-menu">
          <div className="header-menu-in header-border">
            <Link to={DeveloperUrl}>Developer</Link>
          </div>
          <div className="header-menu-in">
            <Link to={PortfolioUrl}>Portfolio</Link>
          </div>
          <div className="header-menu-in">
            <Link to={SkillStackUrl}>Skill&Stack</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
