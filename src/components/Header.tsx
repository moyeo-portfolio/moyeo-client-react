import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Header.scss';

import { useBase } from '../store/baseStore';
import { Link } from 'react-router-dom';

export default function Header ({ resize }) {
    const store = useBase();
    const [mobileShow, setMobileShow] = useState<boolean>(true);
    const [menuCheck, setMenuCheck] = useState<boolean>(false);

    useEffect(()=>{
    },[]);

    return (
        <>
            <div className='header'>
                <div className='header-menu-box'>
                    <div className='header-menu'>Mypage</div>
                    <div className='header-menu'>About Me</div>
                    <div className='header-menu'>Stack</div>
                    <div className='header-menu'>Career</div>
                    <div className='header-menu'>Project</div>
                </div>
            </div>
        </>
    );
}