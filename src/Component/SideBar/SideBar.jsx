import React from 'react';
import style from './SideBar.module.css';
import SideBarBlock from './SideBarBlock/SideBarBlock';
import { SideBarList } from '../../Context/SideBarList';

const SideBar = () => {
    const list = SideBarList;
    return (

        <nav id="sidebarMenu" className={style.side_bar_section}>
            <div className={style.side_bar_box}>
                <ul className={`${style.side_bar__list}`}>
                    {
                        list.map((item, index) => {
                            return <SideBarBlock item={item} style={style} key={index} />
                        })
                    }
                </ul>
            </div>
           
        </nav>

    );
};

export default SideBar;