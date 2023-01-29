import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Career.scss';

import { CareerINF, CareerListINF } from './CareerINF';
import Lang from './Lang';

export default function CareerCard ({ getData }: CareerListINF) {
    useEffect(()=>{
    },[]);

    return (
        <>
        {getData.map((data: CareerINF, idx: number)=> {
            return (
                <div key={idx} className='career-main-box'>
                    <div className='career-main-box-top'>
                        <div className='career-ball'></div>
                        <div className='career-line'></div>
                    </div>
                    <div className='career-main-box-middle career-main-box-middle-0'>
                        <div className='career-time'>
                            {data.start_date.split('-')[0]+"."+data.start_date.split('-')[1]}~&nbsp;
                            {Object.keys(data).includes('end_date')&& data.end_date.split('-')[0]+"."+data.end_date.split('-')[1]}
                        </div>
                        <div className='career-title'>{data.title}</div>
                        <Lang getData={data.langs_str} />
                        <div className='career-content'>
                            {data.contents.map((data2, idx2: number)=>{
                                return (
                                    <div key={idx2}>
                                        ○ {data2}
                                    </div>
                                );
                            })}
                        </div>
                        <a href={data.github_link} target="_blank" className='career-link'>깃허브 | {data.github_link}</a><br/>
                        <Link to={data.site_link} target="_blank" className='career-link'>바로가기 | <span>{"http://www.moyeo.org"+data.site_link}</span></Link>
                    </div>
                </div>
            );
        })}
        </>
    );
}
