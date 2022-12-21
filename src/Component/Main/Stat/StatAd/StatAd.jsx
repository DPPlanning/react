import React from 'react';
import Header from '../Header/Header';
import ClientList from './component/ClientList';
import style from './StatAd.module.css';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StatAd = () => {
    const [pageName, setPageName] = useState('');
    const location = useLocation();
    useLayoutEffect(() => {
        const url = new URL(window.location).pathname.split('/')[2];
        switch (url) {
            case 'naver':
                setPageName('네이버');
                break;
            case 'google':
                setPageName('구글');
                break;
            case 'facebook':
                setPageName('페이스북');
                break;
            default:
                setPageName('종합');
                break;
        }
    }, [location])
    return (
        <div  className={style.naver__main} >
            <Header title={pageName}/>
           {/* 부트스트랩 칸을 4칸으로 나눈 div 박스 */}
           <div className={style.naver__main_box}>
                <ClientList />
           </div>
        </div>
    );
};

export default StatAd;