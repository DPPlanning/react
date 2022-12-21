import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { baseUrl } from '../../../http/http';
import LookupForm from '../Lookup/component/LookupForm';
import style from './LookupClient.module.css';
const LookupClient = () => {
    const location = useLocation();
    const [businessNumber, setBusinessNumber] = useState(new URL(window.location).searchParams.get("n"))
    const [clients, setClients] = useState([])
    useLayoutEffect(() => {
        const accessToken = localStorage.getItem('idx');
        const form = { search: new URL(window.location).searchParams.get("n") }
        console.log(form);
        axios({
            url: `${baseUrl}/client?n=${businessNumber}`,
            method: 'GET',
            headers: {
                "Content-Type": `application/json`,
                "Authorization": `Bearer ${accessToken}`
            },
        })
            .then((res) => {
                setClients(res.data);
            }).catch((err) => { console.log(err); })
        setBusinessNumber(new URL(window.location).searchParams.get("n"))
    }, [location])

    return (
        <div className={style.look_up__client__section}>
            <h3>영업 조회</h3>
            <div className={style.look_up__client__section_form}>
                <LookupForm style={style} />
            </div>
            <ul>
                <li className={`${style.look_up__list} ${style.look_up__list_title}`}>
                    <div>
                        상호명
                    </div>
                    <div>
                        사업자 번호
                    </div>
                    <div>
                        디피 담당자 이름
                    </div>
                    <div>
                        관리 부서
                    </div>
                    <div>
                        영업가능 유무
                    </div>
                </li>
                {clients.length !== 0 ?
                    <>
                        {clients.map((item, index) => {
                            return (
                                <li className={`${style.look_up__list} ${style.look_up__list_content}`}>
                                    <div>
                                        {item.client_business_name}
                                    </div>
                                    <div>
                                        {item.client_business_number}
                                    </div>
                                    <div>
                                        {item.employee_name}
                                    </div>
                                    <div>
                                        {item.team_name}
                                    </div>
                                    <div>
                                        영업 불가
                                    </div>
                                </li>
                            )
                        })}
                    </>
                    :
                    <li className={`${style.look_up__list} ${style.look_up__list_no_data}`}>
                        조회 번호 : {businessNumber}
                        영업 가능
                    </li>
                }


            </ul>
        </div>
    );
};

export default LookupClient;