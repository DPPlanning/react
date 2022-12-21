import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBarBlock = ({ item, style }) => {
    const [slideOnOff, setSlideOnOff] = useState(false)
    return (
        <li className={` ${style.slide_bar__list__parent}`}>
            {
                !item.children ?
                    <Link className="" aria-current="page" to={item.path}>
                        {item.title}
                    </Link>
                    :
                    <div className={style.slide_bar__list_div} onClick={() => { setSlideOnOff(!slideOnOff) }}>
                        {item.title}
                    </div>
            }
            <ul className="">
                {slideOnOff && item.children && item.children.map((item) => (
                    <li className={` ${style.slide_bar__list__item}`} key={item.title} >
                        <Link className={`${style.slide_bar__list__children}`} to={item.path} >
                            {item.title}
                        </Link>
                        
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default SideBarBlock;