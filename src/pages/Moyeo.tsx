import React from "react";
import "styles/Moyeo.scss";

interface IMoyeo {
  state: {
    setShow: Function;
  };
}

function Moyeo({ state }: IMoyeo): JSX.Element {
  return (
    <div className="moyeo-main">
      <div className="moyeo-box">
        Moyeo
        <div
          onClick={() => {
            state.setShow(true);
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default Moyeo;
