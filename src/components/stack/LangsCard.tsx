import React from 'react';
import { LangINF } from './StackINF';

interface LangsListINF {
    getData: LangINF[],
}

export default function LangsCard ({ getData }) {
    return (
        <>
        {getData.map((data: LangINF, idx: number)=>{
            return (
                <div key={idx} className='usestack-lang'>
                    <div className='usestack-title'>{data.lang}</div><br/>
                    {data.contents}
                </div>
            );
        })}
        </>
    );
}