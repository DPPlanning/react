import React from 'react';
import Header from '../Header/Header';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NaverForm from './NaverForm/NaverForm';
import GoogleForm from './GoogleForm/GoogleForm';
import FacebookForm from './FacebookForm/FacebookForm';
import style from './StatAPI.module.css'
const StatAPI = () => {
    const [pageName, setPageName] = useState('');
    const [formBox, setFormBox] = useState(undefined)
    const location = useLocation();
    useLayoutEffect(() => {
        const url = new URL(window.location).pathname.split('/')[2];
        switch (url) {
            case 'naver':
                setPageName('네이버');
                setFormBox(<NaverForm style={style} />)
                break;
            case 'google':
                setPageName('구글');
                setFormBox(<GoogleForm style={style} />)
                break;
            case 'facebook':
                setPageName('페이스북');
                setFormBox(<FacebookForm style={style} />)
                break;
            default:
                setPageName('종합');
                break;
        }
    }, [location])
    return (
        <div>
            <Header title={`${pageName} API 등록`} />
            {formBox}
        </div>
    );
};

export default StatAPI;