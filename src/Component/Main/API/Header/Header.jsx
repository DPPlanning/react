import React from 'react';
import style from './Header.module.css';

const Header = ({title}) => {
    
    return (
        <div className={style.stat__header}>
            <h3 className={style.stat__header_title}>{title}</h3>
        </div>
    );
};

export default Header;