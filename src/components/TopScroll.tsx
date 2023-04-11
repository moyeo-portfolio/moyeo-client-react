import React, { useEffect, useState } from "react";
import "styles/TopScroll.scss";

interface Props {}

export default function TopScroll(): JSX.Element {
  // useEffect(() => {}, [who]);

  return (
    <>
      <div className="topscroll">
        <div className="center">
          <div>Hi</div>
        </div>
      </div>

      <div className="topscroll-bg" />
    </>
  );
}
