'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {navData, pageData} from "@/app/landingpage/data";

const LandingPage = () => {

    useEffect(() => {
        let links = gsap.utils.toArray(".link");

        links.forEach((el: any, i) => {
            let blue = document.getElementById(`blue${i}`);
            let hoverTL = gsap.timeline()
            hoverTL.pause();
            hoverTL.to(blue, {width: "calc(100% + 1.3em)", ease: "Elastic.easeOut(0.25)", duration: 0.4})
            hoverTL.to(blue, {
                width: "25px",
                left: "calc(100% - 1.55em)",
                ease: "Elastic.easeOut(0.1)",
                duration: 0.6
            })
            el.addEventListener("mouseenter", () => {
                hoverTL.play();
            })
            el.addEventListener("mouseleave", () => {
                hoverTL.reverse();
            })
        });
    }, []);

    return (
        <header className="flex w-full items-center p-3.5 h-20 fixed bg-white z-10">
            <div className="logo flex justify-start w-6/12 text-2xl">
                <div className="flex text-black mr-1">
                    <p id='o' className='text-[#a3c5db]'>O</p>
                    <p id='e' className='text-[#bf9a56]'>E</p>
                    <p id='v' className='text-[#e2001a]'>V</p>
                </div>
                <div className="text-black"> {pageData.headerTitle}</div>
            </div>
            <div className="flex justify-end w-6/12 flex-row">
                {navData.map((link, index) => (
                    <div className="wrapper w-auto mr-8" key={link.text}>
                        <a href={link.href}
                           className="link flex gap-1 items-center text-black text-gray-900 relative">
                            <div
                                className="blue w-[25px] h-[25px] rounded-[25px] absolute top-1/2 left-[-0.65em] bg-[#a3c5db] transform translate-y-[-50%]"
                                id={`blue${index}`}></div>
                            <span className='relative'>{link.text}</span>
                            <NavigateNextIcon htmlColor='#171717' style={{position: 'relative'}}/>
                        </a>
                    </div>
                ))}
            </div>
        </header>
    )
}

export default LandingPage;
