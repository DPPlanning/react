import React from 'react';
import LookupForm from './component/LookupForm';

import style from './Lookup.module.css'

const Lookup = () => {
    
    return (
        <div className={style.search__section}>
            <h3 className={style.search__title}>
                사업자 번호로 조회하기
            </h3>
            <LookupForm style={style} />
        </div>
    );
};

export default Lookup;