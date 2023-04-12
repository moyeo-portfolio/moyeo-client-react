import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import NotFound from "pages/NotFound";
import Headers from "components/Headers";
import Footers from "components/Footers";

import Home from "pages/Home";
import Developer from "pages/Developer";
import Portfolio from "pages/Portfolio";
import SkillStack from "pages/SkillStack";

import { HomeUrl, DeveloperUrl, PortfolioUrl, SkillStackUrl } from "Router";
import TopScroll from "components/TopScroll";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app-main">
        <Headers />
        <TopScroll />
        <Routes>
          <Route path={HomeUrl} element={<Home />} />
          <Route path={DeveloperUrl} element={<Developer />} />
          <Route path={PortfolioUrl} element={<Portfolio />} />
          <Route path={SkillStackUrl} element={<SkillStack />} />
          <Route path={"/*"} element={<NotFound />} />
        </Routes>
        {/* <Footers /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
