import React from 'react';
import './WhoAmI.scss';

export default function WhoAmI ({resize}) {

    return (
        <div 
            className='all'
            style={{
                height: resize[1] + "px",
            }}>
            <div className='all-inner'>
                <div className='margin-auto'>
                    <div className='block'></div>
                    <div className='whoami-main'>
                        <div className='whoami-main-inner'>
                            <div className='whoami-main-top'>저는 이런 사람입니다!</div>
                            <div className='whoami-main-middle'>
                                <div className='whoami-main-middle-text'>○ 저는 숭실대학교 IT대학 글로벌미디어학부에 재학중이며 졸업예정자 입니다.</div>
                                <div className='whoami-main-middle-text'>○ 홀로 공부하기 보단 프로젝트를 수행하며 배워가는 것을 좋아하고, 이를 통해 기획자, 디자이너와 소통하는 방법을 배워왔습니다.</div>
                                <div className='whoami-main-middle-text'>○ 맡게 된 프로젝트는 책임감 있게 참여하고 마지막까지 최선을 다하기에 팀원들에게 인정받아왔습니다.</div>
                                <div className='whoami-main-middle-text'>
                                    ○ 제가 가장 중요하게 생각하는 것은 약속입니다. 
                                    약속 장소에 30분 전부터 미리 도착해 준비하고, 프로젝트 완성에 있어도 약속 기간이 있다면 그 기간을 꼭 지킵니다.
                                </div>
                                <div className='whoami-main-middle-text'>○ 물론 부족한 점도 있지만, 피드백을 받으면 최대한 빠르게 고치려 합니다.</div>
                                {/* 여러 프로젝트를 맡아오면서 제 역량을 알고 있기에 무리해서 일을 처리하는 경우는 없습니다. */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
