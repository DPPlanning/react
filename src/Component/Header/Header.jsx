import React, { useLayoutEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from './Header.module.css';
import {useRecoilState} from 'recoil'
import { Employee } from '../recoil/Auth';
import axios from 'axios';
import { baseUrl } from '../../http/http';


const Header = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const [employee, setEmployee] = useRecoilState(Employee);
    // 토큰이 없으면 로그인 페이지로 이동
    
    useLayoutEffect(()=>{
        const accessToken = localStorage.getItem('idx');
        axios({
            url: `${baseUrl}/auth/employee`,
            method: "GET",
            headers: {
                "Content-Type": `application/json`,
                "Authorization": `Bearer ${accessToken}`
            },
            
        }).then((result) => {
            if(result.status === 200){
                setEmployee(result.data);
            }else{
                window.alert();
            }
        }).catch((err) => {
            console.log(err);
        })
    },[location])
    const LogOut =() =>{
        localStorage.removeItem('idx');
        navigate('/login')
    }
    
    return (
        <section>
            <nav className={`${style.header__nav}`}>
                <Link className="navbar-brand" to="/"><img src="http://www.dpplanning.co.kr/RAD/PEG/logo_16275215309465.png" alt="로고" /></Link>

                <div className={` ${style.header__nav_member_info}`}>
                    <div>
                        {employee&& employee.employee_name}
                    </div>
                    <div onClick={LogOut}>로그아웃</div>
                </div>
            </nav>
        </section>
    );
};

export default Header;