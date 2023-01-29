import React from 'react';
import { ToolINF } from './StackINF';

interface ToolsListINF {
    getData: ToolINF[],
}

export default function ToolsCard ({ getData }: ToolsListINF ) {
    return (
        <>
            {getData.map((data: ToolINF, idx: number)=>{
                return (
                    <div key={idx}>
                        {data.tool}
                        {getData.length !== (idx+1)&&<>,&nbsp;</>}
                    </div>
                );
            })}
        </>
    );
}