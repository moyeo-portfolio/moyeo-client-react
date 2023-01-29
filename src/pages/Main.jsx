import React, { useState, useEffect, useMemo } from "react";
import { throttle } from 'lodash';
import './Main.scss';

import axios from 'axios';
import Home from '../components/Home';

import { useBase } from "../store/baseStore";

import arrowUp from '../assets/arrow_up.png';
import arrowBottom from '../assets/arrow_bottom.png';
import ScrollButton from "../components/ScrollButton";

export default function Main({ resize }) {
  const [scrollNum, setScrollNum] = useState(0);
  useEffect(() => {
  }, []);

  return (
    <>
      <div className="main">
        {/* <div className="main-circle"></div> */}
        {/* <div style={{ "width": "100px", "height": "3000px", }}></div> */}
        <div className="main-inner" style={{ top: -scrollNum*resize[1] }}>
          <Home resize={resize}/>
        </div>
        <ScrollButton scrollNum={scrollNum} setScrollNum={setScrollNum} />
      </div>
      {/* <div 
        className="main"
        style={{
          height: resize[1]*4 + "px",
          top: -resize[1]*store.page + "px"
        }}>
        <Mypage resize={resize} />
        <WhoAmI resize={resize} />
        <UseStack resize={resize} />
        <Career resize={resize} />
      </div>
      <div 
        className="main-arrow-up"
        onClick={()=>{
          if (store.page !== 0)
            store.setPage(store.page-1);
        }}>
          <img src={arrowUp} />
      </div>
      <div 
        className="main-arrow-bottom"
        onClick={()=>{
          if (store.page !== lastPage) {
            window.scrollTo({ 
              top: 0,
              left: 0,
              behavior: 'smooth', 
            });
            store.setPage(store.page+1);
          }
        }}>
          <img src={arrowBottom} />
      </div>
      <div className="pixie-background">
        <canvas id="pixie"></canvas>
      </div> */}
    </>
  );
}
