import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useBase } from '../../store/baseStore';
import { backendUrl } from '../../utils/backendUrl';
import { ResizeINF } from '../../utils/interfaceAll';
import { StackINF, ToolINF, LangINF } from './StackINF';
import './UseStack.scss';
import ToolsCard from './ToolsCard';
import LangsCard from './LangsCard';

export default function UseStack ({ resize }: ResizeINF) {
    const [frontTools, setFrontTools] = useState<ToolINF[]>([]);
    const [frontLangs, setFrontLangs] = useState<LangINF[]>([]);
    const [backTools, setBackTools] = useState<ToolINF[]>([]);
    const [backLangs, setBackLangs] = useState<LangINF[]>([]);
    const [etcLangs, setEtcLangs] = useState<LangINF[]>([]);

    useEffect(()=>{
        let isComponentMounted = true;
        axios({
            url: (backendUrl+'/api-moyeo/stack'),
            method: 'GET',
        }).then((res)=>{
            if (res) {
                if (isComponentMounted) {
                    const data = res.data.data;
                    setFrontTools(data.filter((d: StackINF)=>{
                        if (d.status_tool&&d.status===0) 
                            return {
                                tool: d.tool,
                            }
                    }));
                    setFrontLangs(data.filter((d: StackINF)=>{
                        if (!d.status_tool&&d.status===0) 
                        return {
                            lang: d.lang,
                            contents: d.contents,
                        }
                    }));
                    setBackTools(data.filter((d: StackINF)=>{
                        if (d.status_tool&&d.status===1) 
                            return {
                                tool: d.tool,
                            }
                    }));
                    setBackLangs(data.filter((d: StackINF)=>{
                        if (!d.status_tool&&d.status===1) 
                            return {
                                lang: d.lang,
                                contents: d.contents,
                            }
                    }));
                    setEtcLangs(data.filter((d: StackINF)=>{
                        if (!d.status_tool&&d.status===2) 
                            return {
                                lang: d.lang,
                                contents: d.contents,
                            }
                    }));
                }
            }
        }).catch((err)=>{
            console.log(err);
        })

        return () => {
            isComponentMounted = false
        }
    },[]);

    return (
        <div 
            className='all'
            style={{
                height: resize[1] + "px",
            }}>
            <div className='all-inner'>
                <div className='margin-auto'>
                    <div className='block'></div>
                    <div className='usestack-main'>
                        <div className='usestack-main-inner'>
                            <div className='usestack-main-top'>
                                프론트엔드<br/>
                                <div className="flex">
                                    사용 툴 |&nbsp;
                                    <ToolsCard getData={frontTools} />
                                </div>
                            </div>
                            <div className='usestack-main-middle'>
                                <LangsCard getData={frontLangs} />
                            </div>
                            <div className='usestack-main-top'>
                                백엔드<br/>
                                <div className="flex">
                                    사용 툴 |&nbsp;
                                    <ToolsCard getData={backTools} />
                                </div>
                            </div>
                            <div className='usestack-main-middle'>
                                <LangsCard getData={backLangs} />
                            </div>
                            <div className='usestack-main-top'>그 외에 언어들</div>
                            <div className='usestack-main-middle'>
                                <LangsCard getData={etcLangs} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
