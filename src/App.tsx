import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
  // const location = useLocation();
  const [menu, setMenu] = useState(0);
  const [who, setWho] = useState(0);

  useEffect(() => {
    const url = window.location.href.split("/");
    const pathname = url[url.length - 1];
    if (pathname === "Developer") setMenu(0);
    else if (pathname === "Portfolio") setMenu(1);
    else if (pathname === "SkillStack") setMenu(2);
  }, []);

  return (
    <BrowserRouter>
      <div className="app-main">
        <Headers menu={menu} setMenu={setMenu} />
        <TopScroll who={who} setWho={setWho} />
        <div className="padding-top" />
        <Routes>
          <Route
            path={HomeUrl}
            element={<Home setMenu={setMenu} setWho={setWho} />}
          />
          <Route path={DeveloperUrl} element={<Developer who={who} />} />
          <Route path={PortfolioUrl} element={<Portfolio who={who} />} />
          <Route path={SkillStackUrl} element={<SkillStack who={who} />} />
          <Route path={"/*"} element={<NotFound />} />
        </Routes>
        {/* <Footers /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
