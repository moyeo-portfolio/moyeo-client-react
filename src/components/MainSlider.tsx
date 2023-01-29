import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import './MainSlider.scss';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// import season_img from "../assets/season.png";
// import pickit_img from "../assets/pickit.png";
// import kcook_img from "../assets/kcook.png";
// import santarun_img from "../assets/santarun.png";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <RightOutlined />
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <LeftOutlined />
    </div>
  );
};

export default function MainSlider () {
  let settings = {
      dots: true, // 밑에 점
      infinite: true, // 콘텐츠 끝까지 갔을때 처음 콘텐츠를 가져와 반복
      autoplay: true,
      speed: 500, // 넘어가는 속도(ms)
      slidesToShow: 1, // 한 화면에 보이는 콘텐츠 개수
      slidesToScroll: 1, //한번에 넘기는 콘텐츠 개수
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
  
      appendDots: (dots) => (
        <div>
          <ul> {dots} </ul>
        </div>
      ),
      dotsClass: 'dots_custom',
      // dotsClass에 dots를 커스텀 해줄 class명을 넣어준 뒤
      // 해당 컴포넌트에 css 파일을 불러온다.
  };

  return (
    <>
      {/* <Slider {...settings} className="main-crousel">
        {[
          {
            img: season_img,
            link: "/season/index.html",
          },
          {
            img: pickit_img,
            link: "/pickit/",
          },
          {
            img: kcook_img,
            link: "/kcook/",
          },
          {
            img: santarun_img,
            link: "/santarun/",
          },
        ].map((data, idx) => {
            return (
            <a href={"http://www.moyeo.org" + data.link} key={idx}>
              <img src={data.img} />
            </a>
            );
        })}
      </Slider> */}
    </>
  );
}