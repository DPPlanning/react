import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../../http/http';
import style from './Login.module.css'

const Login = () => {
    let navigate = useNavigate();
    // form submit 이벤트
    const OnSubmit = (e) => {
        e.preventDefault();
        // 로그인 처리
        // id localStorage 생성
        
        // 아이디 가져오기
        const email = e.target.exampleInputEmail1.value;
        const password = e.target.exampleInputPassword1.value;
        // id pass 값이 없으면 return
        if (!email ) {
            return window.alert("이메일을 입력해 주세요");
        }
        if (!password) {
            return window.alert("패스워드를 입력해 주세요");
        }
   
        const body = {
            email ,
            password ,
        }
        axios({
            url: `${baseUrl}/auth/login`,
            method: "POST",
            headers: {
                "Content-Type": `application/json`,
            },
            data: JSON.stringify(body),
        }).then((result) => {
            console.log(result.data);
            localStorage.setItem('idx',result.data.token);
            navigate('/');
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <section className={style.login_section}>
            {/* 부트스트랩을 이용한 로그인 타이틀 */}
            <div className={style.login_title}>
                <div className="row">
                    <div className="col-12">
                        <img src="http://www.dpplanning.co.kr/RAD/PEG/logo_16275215309465.png" alt="로고" />
                        <h1 className="text-center">Login</h1>
                    </div>
                </div>
            </div>
            {/* 로그인 폼 */}
            <div  className={style.login_input_box}>
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={OnSubmit}>
                            <div  className={style.login_input_email}>
                                <div>
                                    <label for="exampleInputEmail1"><h5>이메일 주소</h5> </label>
                                </div>
                                <div>
                                    <input 
                                        type="email" 
                                        className={style.login_input_input}
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder="이메일을 입력해주세요." />
                                </div>
                            </div>
                            <div className={style.login_input_password}>
                                <div>
                                    <label for="exampleInputPassword1"><h5>비밀번호</h5> </label>
                                </div>
                                <div>
                                    <input 
                                        type="password" 
                                        className={style.login_input_input}
                                        id="exampleInputPassword1" 
                                        placeholder="비밀번호를 입력해주세요." />
                                </div>
                            </div>
                        
                            <button type="submit"  className={style.login_input_button }>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;