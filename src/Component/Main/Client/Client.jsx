import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { baseUrl } from '../../../http/http';
import { busynessNumberHyphen } from '../../../utils/funtion';
import style from './Client.module.css'
import {useRecoilState} from 'recoil'
import { AlertMessage } from '../../recoil/Alert';
const Client = () => {
    const [alertMessage, setAlertMessage] = useRecoilState(AlertMessage);
    const [businessNumber, setBusinessNumber] = useState("")
    const [phon1, setBusinessTel1] = useState("")
    const [phon2, setBusinessTel2] = useState("")
    const [email, setEmail] = useState("")
    const [manager, setManager] = useState("")
    const [businessName, setBusinessName] = useState("")

    const OnSubmit = (e) => {
        e.preventDefault();
        const form = {
            businessNumber, phon1, phon2, email, manager, businessName
        }
        const accessToken = localStorage.getItem('idx');
        axios({
            url: `${baseUrl}/client`,
            method: "POST",
            headers: {
                "Content-Type": `application/json`,
                "Authorization": `Bearer ${accessToken}`
            },
            data: JSON.stringify(form),
        }).then((result) => {
            setAlertMessage({"status" : result.status , "message": result.data.message  });
        }).catch((result) => {
            setAlertMessage({"status" : result.response.status , "message": result.response.data.message  });
        })

    }
 
    const OnChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "businessNumber":
                if (e.nativeEvent.data !== null && value.length === 13) {
                    return;
                }
                if (isNaN(e.nativeEvent.data)) {
                    setBusinessNumber("");
                    return window.alert("숫자만 입력이 가능합니다.")
                }
                let str = value
                str = busynessNumberHyphen(e.nativeEvent.data, value)
                setBusinessNumber(str);
                break;
            case "businessTel1":
                if (isNaN(value) && isNaN(e.nativeEvent.data) && e.nativeEvent.data !== "-") {
                    setBusinessTel1("");
                    return window.alert("숫자만 입력이 가능합니다.")
                }

                setBusinessTel1(value)
                break;
            case "businessTel2":
                if (isNaN(value) && isNaN(e.nativeEvent.data) && e.nativeEvent.data !== "-") {
                    setBusinessTel2("");
                    return window.alert("숫자만 입력이 가능합니다.")
                }
                setBusinessTel2(value)
                break;
            case "email":
                setEmail(value);
                break;
            case "manager":
                setManager(value);
                break;
            case "businessName":
                setBusinessName(value);
                break;
            default:
                break;
        }
    }
    return (
        <form onSubmit={OnSubmit} className={style.client_input_form}>
            <h3>
                광고주 등록하기
            </h3>
            <div>
                <h5>사업자 번호</h5>
                <input
                    type="text"
                    onChange={OnChange}
                    name="businessNumber"
                    value={businessNumber}
                    className={style.client_input_text}
                    placeholder="사업자 번호" />
            </div>
            <div>
                <h5>이메일</h5>
                <input
                    type="email"
                    onChange={OnChange}
                    name="email"
                    value={email}
                    className={style.client_input_text}
                    placeholder="이메일" />
            </div>
            <div>
                <h5>연락처1</h5>
                <input
                    type="tel"
                    onChange={OnChange}
                    name="businessTel1"
                    value={phon1}
                    className={style.client_input_text}
                    placeholder="연락처" />
            </div>
            <div>
                <h5>연락처2</h5>
                <input
                    type="tel"
                    onChange={OnChange}
                    name="businessTel2"
                    value={phon2}
                    className={style.client_input_text}
                    placeholder="연락처" />
            </div>
            <div>
                <h5>담당자 이름</h5>
                <input
                    type="text"
                    onChange={OnChange}
                    name="manager"
                    value={manager}
                    className={style.client_input_text}
                    placeholder="담당자 이름" />
            </div>
            <div>
                <h5>상호명</h5>
                <input type="text"
                    onChange={OnChange}
                    name="businessName"
                    value={businessName}
                    className={style.client_input_text}
                    placeholder="상호명" />
            </div>
      
            <input type="submit" value="등록하기" className={`${style.client_input_button}`} />

        </form>
    );
};

export default Client;