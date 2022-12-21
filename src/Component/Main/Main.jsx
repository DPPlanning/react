import React, { useState } from 'react';
import style from './Main.module.css';
import { useLayoutEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../http/http';
import MainClientList from './List/Main/MainClientList';

const Main = () => {
    const [myClients, setMyClients] = useState([]);

    useLayoutEffect(() => {
        const accessToken = localStorage.getItem('idx');
        axios({
            url: `${baseUrl}/client?`,
            method: "GET",
            headers: {
                "Content-Type": `application/json`,
                "Authorization": `Bearer ${accessToken}`
            },

        }).then((result) => {
            console.log(result);
            if (result.status === 200) {
                setMyClients(result.data);
            } else {
                window.alert();
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            <section>
                <h3>내 클라이언트</h3>
                <ul>
                    <li className={style.employee__client_list_title} key={-1}>
                        <div>
                            상호명
                        </div>
                        <div>
                            사업자 번호
                        </div>
                        <div>
                            담당자
                        </div>
                        <div>
                            이메일
                        </div>
                        <div>
                            연락처1
                        </div>
                        <div>
                            연락처2
                        </div>
                        <div>
                            수정
                        </div>
                        <div>
                            삭제
                        </div>
                    </li>
                    {myClients &&
                        myClients.map((items, index) => {
                            return (
                                <MainClientList items={items} index={index} style={style} />
                            )
                        })
                    }
                </ul>
            
            </section>
        </div>
    );
};

export default Main;