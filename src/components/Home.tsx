import React, { useEffect } from 'react';
import './Home.scss';

const profileImg = require('../assets/choiyeju.png');

export default function Home ({resize}) {

    return (
        <>
            <div className='' style={{ height: resize[1], }}>
                <div 
                    style={{ position: "absolute", bottom: 0, }}
                    onClick={()=>{
                        console.log("a");
                    }}>
                    button
                </div>
            </div>
        </>
    );
}
