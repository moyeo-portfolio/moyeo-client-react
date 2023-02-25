import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Moyeo from 'pages/Moyeo';
import NotFound from 'pages/NotFound';
import Headers from 'components/Headers';
import Footers from 'components/Footers';
import Home from 'pages/Home';
import Mypage from 'pages/Mypage';
import Portfolio from 'pages/Portfolio';
import Experience from 'pages/Experience';

import { HomeUrl, MypageUrl, PortfolioUrl, ExperienceUrl } from 'Router';

function App(): JSX.Element {
  const [show, setShow] = useState<boolean>(false);

  return (
    <BrowserRouter>
      {show&&<Headers />}
      <Routes>
        <Route path={HomeUrl} element={show? <Home /> : <Moyeo state={{setShow:setShow}} />} />
        <Route path={MypageUrl} element={<Mypage />} />
        <Route path={PortfolioUrl} element={<Portfolio />} />
        <Route path={ExperienceUrl} element={<Experience />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
      {show&&<Footers />}
    </BrowserRouter>
  );
}

export default App;
