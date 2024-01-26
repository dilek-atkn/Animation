'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {navData} from "@/app/headers/data";
import Logo from "@/app/headers/partials/Logo";

const Menu2 = () => {

    useEffect(() => {
        let links = gsap.utils.toArray(".link-2");

        links.forEach((el: any, i) => {
            let blue = document.getElementById(`red${i}`);
            let hoverTL = gsap.timeline()
            hoverTL.pause();
            hoverTL.to(blue, {width: "calc(100% + 0.8em)", ease: "Elastic.easeOut(0.35)", duration: 0.6})
            el.addEventListener("mouseenter", () => {
                hoverTL.play();
            })
            el.addEventListener("mouseleave", () => {
                hoverTL.reverse();
            })
        });
    }, []);

    return (
        <div
            className="flex w-full items-center p-3.5 h-20 bg-white z-10">
            <Logo/>
            <div className="flex justify-end w-6/12 flex-row">
                {navData.map((link, index) => (
                    <div className="wrapper w-auto mr-8" key={link.text}>
                        <a href={link.href}
                           className="link-2 flex gap-1 items-center text-gray-900 relative">
                            <div
                                className="red w-[25px] h-[25px] rounded-[25px] absolute top-1/2 left-[-0.65em] bg-[#e2001a] transform translate-y-[-50%]"
                                id={`red${index}`}></div>
                            <span className='relative'>{link.text}</span>
                            <NavigateNextIcon htmlColor='#171717' style={{position: 'relative'}}/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu2;
