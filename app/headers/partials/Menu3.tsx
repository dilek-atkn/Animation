'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {navData} from "@/app/headers/data";
import Logo from "@/app/headers/partials/Logo";

const Menu3 = () => {

    useEffect(() => {
        let links = gsap.utils.toArray(".link-3");

        links.forEach((el: any, i) => {
            let item = document.getElementById(`blackBorder${i}`);
            let hoverTL = gsap.timeline()
            hoverTL.pause();
            hoverTL.to(item, {borderBottom: "1px solid black", width: '100%', ease: "back.out", duration: 0.5})

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
                           className="link-3 flex gap-1 items-center text-gray-900 relative">
                            <div
                                className="blackBorder absolute bottom-0 "
                                id={`blackBorder${index}`}></div>
                            <span className='relative'>{link.text}</span>
                            <NavigateNextIcon htmlColor='#171717'/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu3;
