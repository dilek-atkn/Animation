'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {navData} from "@/app/headers/data";
import Logo from "@/app/headers/partials/Logo";

const Menu4 = () => {

    useEffect(() => {
        let links = gsap.utils.toArray(".link-4");

        links.forEach((el: any, i) => {
            let item = document.getElementById(`background${i}`);
            let arrow = document.getElementById(`arrow${i}`);

            let hoverTL = gsap.timeline()
            hoverTL.pause();
            hoverTL.to(item, {backgroundColor: "#a3c5db", color: 'white', ease: "power1.in", duration: 0.5})
            hoverTL.to(arrow, {color: '#fff', ease: "power1.in", duration: 0.5}, '>-0.5')

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
                    <div className="wrapper mr-6" key={link.text}>
                        <a href={link.href}
                           id={`background${index}`}
                           className="link-4 flex gap-1 items-center text-gray-900 relative p-1 ">

                            <span className='relative'>{link.text}</span>
                            <NavigateNextIcon id={`arrow${index}`} htmlColor='#171717'/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu4;
