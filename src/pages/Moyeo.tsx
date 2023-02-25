import React from 'react';

interface IMoyeo {
    state: {
        setShow: Function
    }
}

function Moyeo({state}: IMoyeo): JSX.Element {
  return (
    <div>
      Moyeo가 통통튀는
      <div onClick={()=>{state.setShow(true)}}>Next</div>
    </div>
  );
}

export default Moyeo;
