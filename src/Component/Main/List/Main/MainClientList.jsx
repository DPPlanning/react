import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { baseUrl } from '../../../../http/http';
import { busynessNumberHyphen } from '../../../../utils/funtion';
import {useRecoilState} from 'recoil'
import { AlertMessage } from '../../../recoil/Alert';
const MainClientList = ({ items, index, style }) => {
    const [alertMessage, setAlertMessage] = useRecoilState(AlertMessage);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [businessName , setBusinessName] = useState(items.client_business_name);
    const [businessNumber , setBusinessNumber] = useState(items.client_business_number);
    const [manager , setManager] = useState(items.client_manager);
    const [email , setEmail] = useState(items.client_email);
    const [phon1 , setPhon1] = useState(items.client_phon_1);
    const [phon2 , setPhon2] = useState(items.client_phon_2);

    const clientUpdate = (e) => {
        e.preventDefault();
        const form = {
            businessNumber:businessNumber ,
            email: email,
            clientManager: manager,
            businessName: businessName,
            phon1,
            phon2 ,
            clientId: items.client_id
        }
        const accessToken = localStorage.getItem('idx');
        axios({
            url: `${baseUrl}/client`,
            method: "PUT",
            headers: {
                "Content-Type": `application/json`,
                "Authorization": `Bearer ${accessToken}`
            },
            data: JSON.stringify(form),
        }).then((result) => {
            window.alert('업데이트 완료했습니다.')
            window.location.reload();
        }).catch((result) => {
            setAlertMessage ({"status" : result.response.status , "message": '업데이트 실패' });
        })
    }
    const clientDelete = () => {
        if(!window.confirm(`${items.client_business_name}를 삭제하시겠습니까?`)){
            return;
        }
        const accessToken = localStorage.getItem('idx');
        axios({
            url: `${baseUrl}/client?id=${items.client_id}`,
            method: "DELETE",
            headers: {
                "Content-Type": `application/json`,
                "Authorization": `Bearer ${accessToken}`
            },
        }).then((result) => {
            window.alert('업데이트 완료했습니다.')
            window.location.reload();
        }).catch((result) => {
            setAlertMessage ({"status" : result.response.status , "message": '업데이트 실패' });
        })
    }
    useEffect(()=>{
        if(showUpdateModal){
            setBusinessName(items.client_business_name);
            setBusinessNumber(items.client_business_number);
            setManager(items.client_manager);
            setEmail(items.client_email);
            setPhon1(items.client_phon_1);
            setPhon2(items.client_phon_2);
        }
    },[showUpdateModal])
    const OnChange = (e)=>{
        const {name, value} = e.target;
        switch (name) {
            case "businessName":
                setBusinessName(value);
                break;
            case "businessNumber":
                if (e.nativeEvent.data !== null && value.length > 12) {
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
            case "manager":
                setManager(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phon1":
                if (isNaN(value) && 
                    isNaN(e.nativeEvent.data) && 
                    e.nativeEvent.data !== "-") {
                    setPhon1("");
                    return window.alert("숫자만 입력이 가능합니다.")
                }
                setPhon1(value);
                break;
            case "phon2":
                if (isNaN(value) && 
                    isNaN(e.nativeEvent.data) && 
                    e.nativeEvent.data !== "-") {
                    setPhon2("");
                    return window.alert("숫자만 입력이 가능합니다.")
                }
                setPhon2(value);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <li className={style.employee__client_list_list} key={index}>
                <div>
                    {items.client_business_name}
                </div>
                <div>
                    {items.client_business_number}
                </div>
                <div>
                    {items.client_manager}
                </div>
                <div>
                    {items.client_email}
                </div>
                <div>
                    {items.client_phon_1}
                </div>
                <div>
                    {items.client_phon_2}
                </div>
                <div>
                    <button onClick={()=>{setShowUpdateModal(true)}}>
                        수정
                    </button>
                </div>
                <div>
                    <button onClick={clientDelete}>
                        삭제
                    </button>
                </div>
            </li>
            {showUpdateModal &&
                <div className={style.client__update_modal}>
                    <form 
                        className={style.client__update_modal_form}
                        onSubmit={clientUpdate}
                    >
                        <div>
                            <h4>
                                상호명
                            </h4>
                            <input type="text" 
                                value={businessName} 
                                onChange={OnChange} 
                                name="businessName" />
                        </div>
                        <div>
                            <h4>
                                사업자 번호
                            </h4>
                            <input type="text" 
                                value={businessNumber} 
                                onChange={OnChange} 
                                name="businessNumber" />
                        </div>
                        <div>
                            <h4>
                                담당자
                            </h4>
                            <input type="text" 
                                value={manager} 
                                onChange={OnChange} 
                                name="manager" />
                        </div>
                        <div>
                            <h4>
                                이메일
                            </h4>
                            <input type="text" 
                                value={email} 
                                onChange={OnChange} 
                                name="email" />
                        </div>
                        <div>
                            <h4>
                                연락처1
                            </h4>
                            <input type="text" 
                                value={phon1} 
                                onChange={OnChange} 
                                name="phon1" />
                        </div>
                        <div>
                            <h4>
                                연락처2
                            </h4>
                            <input type="text" 
                                value={phon2} 
                                onChange={OnChange} 
                                name="phon2" />
                        </div>
                        <div>
                            <button>수정하기</button>
                        </div>
                        <div>
                            <button onClick={()=>{setShowUpdateModal(false)}}>닫기</button>
                        </div>
                    </form>
                </div>
            }
        </>
    );
};

export default MainClientList;