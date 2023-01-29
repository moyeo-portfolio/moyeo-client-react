import React from 'react';

export default function Lang ({ getData }) {
    return (
        <>
        {getData.map((data: string, idx: number)=> {
            return (
                <div key={idx} className='career-lang'>
                    <div className={'career-lang-box career-lang-box-'+idx}>{data}</div>
                </div>
            );
        })}
        </>
    );
}