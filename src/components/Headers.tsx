import React from "react";
import { Link } from "react-router-dom";
import "styles/Header.scss";

import { HomeUrl, DeveloperUrl, PortfolioUrl, ExperienceUrl } from "Router";

function Headers(): JSX.Element {
  return (
    <div className="header-main">
      <div className="center header-box">
        <span className="header-logo">Headers</span>
        <div className="header-lft-box">
          <Link to={HomeUrl}>Home</Link>
          <Link to={DeveloperUrl}>Developer</Link>
          <Link to={PortfolioUrl}>Portfolio</Link>
          <Link to={ExperienceUrl}>Experience</Link>
        </div>
      </div>
    </div>
  );
}

export default Headers;
