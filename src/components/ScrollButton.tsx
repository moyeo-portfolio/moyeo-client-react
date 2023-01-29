import React from 'react';
import './ScrollButton.scss';

export default function ScrollButton ({ scrollNum, setScrollNum }) {

    return (
        <>
            <div 
                className='scroll-btn'
                onClick={()=>{ setScrollNum(scrollNum+1); console.log(scrollNum); }}>

            </div>
        </>
    );
}
