import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { busynessNumberHyphen } from '../../../../utils/funtion';

const LookupForm = ({ style }) => {
    let navigate = useNavigate();
    const [businessNumber, setBusinessNumber] = useState("")

    const OnSubmit = (e) => {
        e.preventDefault();
        if (!businessNumber) {
            return window.alert('사업자 번호를 입력해 주세요');
        }
        
        window.location.href = `/lookup/client?n=${businessNumber}`

    }
    const OnChange = (e) => {
        const { value } = e.target;

        if (e.nativeEvent.data !== null && value.length === 13) {
            return;
        }
        if (isNaN(e.nativeEvent.data)) {
            setBusinessNumber("");
            return window.alert("숫자만 입력이 가능합니다.")
        }
        let str = value
        str = busynessNumberHyphen(e.nativeEvent.data  ,value)
        setBusinessNumber(str);
    }
    return (
        <form name='number' onSubmit={OnSubmit} className={style.search__form}>
            <div>
                <input type="text" value={businessNumber} onChange={OnChange} className={style.search__input} />
            </div>
            <div>
                <button className={style.search__button}>조회</button>
            </div>
        </form>
    );
};

export default LookupForm;