import React from 'react';
import style from './Footer.module.css';
const Footer = () => {
    return (        
        <footer className={`${style.footer__content_section}`}>
            {/* 부트스트랩을 이용한 검정색 풋터 하단 고정*/}
            <div className={`${style.footer__content}`}>
                <span className=""><img src="http://www.dpplanning.co.kr/RAD/PEG/logo_16275215309465.png" alt="로고" /></span>
            </div>
        </footer>
    );
};

export default Footer;