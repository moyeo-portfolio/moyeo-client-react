import React, { useState, useEffect } from "react";
import "styles/Moyeo.scss";

interface IMoyeo {
  state: {
    setShow: Function;
  };
}

function Moyeo({ state }: IMoyeo): JSX.Element {
  useEffect(() => {}, []);

  return (
    <div className="moyeo-main">
      <div className="moyeo-box">
        <h1 className="mast__title js-spanize">
          <span>M</span>
          <span>o</span>
          <span>y</span>
          <span>e</span>
          <span>o</span>
        </h1>
        <div
          onClick={() => {
            state.setShow(false);
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default Moyeo;
