import React from 'react';
import { Link } from 'react-router-dom';

import { HomeUrl, MypageUrl, PortfolioUrl, ExperienceUrl } from 'Router';

function Headers(): JSX.Element {
  return (
    <div>
      Headers
      <Link to={HomeUrl}>Home</Link>
      <Link to={MypageUrl}>Mypage</Link>
      <Link to={PortfolioUrl}>Portfolio</Link>
      <Link to={ExperienceUrl}>Experience</Link>
    </div>
  );
}

export default Headers;
