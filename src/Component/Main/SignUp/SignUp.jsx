import axios from 'axios';
import React from 'react';
import { baseUrl } from '../../../http/http';

const SignUp = () => {
    
    const OnSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const team = document.getElementById('team').value;
        const body = {
            name,
            email,
            password,
            team
        }
        axios({
            url: `${baseUrl}/auth/signup`,
            method: "POST",
            headers: {
                "Content-Type": `application/json`,
            },
            data: JSON.stringify(body),
        }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <form onSubmit={OnSubmit} method="post">
                <div>
                    <div>
                        이름
                    </div>
                    <input type="text" id='name' />
                </div>
                <div>
                    <div>
                        이메일
                    </div>
                    <input type="text" id="email"/>
                </div>
                <div>
                    <div>
                        비밀번호
                    </div>
                    <input type="text" id="password" />
                </div>
                <div>
                    <div>
                        소속
                    </div>
                    <input type="text" id="team" />
                </div>
                <div>
                    <input type="submit" value="등록하기" />
                </div>
            </form>
        </div>
    );
};

export default SignUp;