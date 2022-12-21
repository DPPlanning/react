import React from 'react';
import style from './ClientList.module.css';
import { getClient } from '../../../../../Context/Client';
import Client from './Client';
const ClientList = () => {
    const clients = getClient(localStorage.getItem('idx'));
   
    return (
        <div>
            {/*  부트스트렙 리스트 박스 생성 */}
            <ul className={style.naver__main_box_list}>
                <li>
                    <div className={style.naver__main_box_list_item}>
                        <div className={style.naver__main_box_list_item_title}>
                            <div>
                                상호명
                            </div>
                            <div>
                                사업자 번호
                            </div>
                            <div>
                                보안키
                            </div>
                            <div>
                                보고서 다운로드
                            </div>
                        </div>
                    </div>
                </li>

                {clients.map((client) => (
                    <li className={style.naver__main_box_list}>
                        <Client client={client} style={style} />
                    </li>
                ))
                }
            </ul>
        </div>
    );
};

export default ClientList;