import React from 'react';
import style from './Alert.module.css'
import { useRecoilState } from 'recoil'
import { AlertMessage } from '../recoil/Alert';
import { useEffect,useState } from 'react';

const Alert = () => {
    const [alertMessage, setAlertMessage] = useRecoilState(AlertMessage);
    const [alertTimer , setAlertTimer]  = useState(false);
    useEffect(() => {
        setAlertTimer(true);
        setTimeout(function () {
            setAlertTimer(false);
        }, 3000);
    }, [alertMessage]);

    return (
        <div className={
            `${style.alert__section} 
            ${alertMessage && 
                alertTimer ? 
                    alertMessage.status > 300 ? 
                        style.alert__section__err 
                        : 
                        style.alert__section__ok
                    : 
                    ''} `}>
            {alertMessage && alertMessage.message}
        </div>
    );
};

export default Alert;