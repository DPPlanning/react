import React from 'react';
import style from './Header.module.css';

const Header = ({title}) => {

    return (
        <div className={style.stat__header}>
            <hr />
            <h3 className={style.stat__header_title}>{title} 보고서</h3>
        </div>
    );
};

export default Header;