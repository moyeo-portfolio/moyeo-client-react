import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Moyeo from "pages/Moyeo";
import NotFound from "pages/NotFound";
import Headers from "components/Headers";
import Footers from "components/Footers";
import Home from "pages/Home";
import Developers from "pages/Developers";
import Portfolios from "pages/Portfolios";
import Experience from "pages/Experience";

import { HomeUrl, DeveloperUrl, PortfolioUrl, ExperienceUrl } from "Router";

function App(): JSX.Element {
  const [show, setShow] = useState<boolean>(true);

  return (
    <BrowserRouter>
      <div className="app-main">
        {show && <Moyeo state={{ setShow: setShow }} />}
        <Headers />
        <Routes>
          <Route path={HomeUrl} element={<Home />} />
          <Route path={DeveloperUrl} element={<Developers />} />
          <Route path={PortfolioUrl} element={<Portfolios />} />
          <Route path={ExperienceUrl} element={<Experience />} />
          <Route path={"/*"} element={<NotFound />} />
        </Routes>
        {/* <Footers /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
