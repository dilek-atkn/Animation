'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";
import {pageData} from "@/app/landingpages/data";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import BasisLayout from "@/app/landingpages/BasisLayout";

gsap.registerPlugin(ScrollTrigger, SplitText);
const SamplePage = () => {

    useEffect(() => {
        const animation = gsap.timeline()
        animation
            .from('#number0', {xPercent: -400, ease: 'power2.out', duration: 1})
            .from('#number6', {xPercent: -400, ease: 'power2.out', duration: 1})
            .from('#number3', {xPercent: -400, ease: 'power2.out', duration: 1})
    }, []);

    return (
        <BasisLayout>
            <section id='intro' className="flex w-full flex-col h-screen">
                <div
                    className="bg z-0 flex w-screen h-screen justify-center flex-col items-center text-center bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 relative bg-no-repeat">
                    <h1 className="text-white w-full text-center text-6xl z-10">{pageData.introTitle2}</h1>
                    <div className="flex w-full justify-center absolute z-0">
                        <p id='number3' className="text-black text-center text-[40rem] opacity-50">3</p>
                        <p id='number6' className="text-black text-center text-[40rem] opacity-50">6</p>
                        <p id='number0' className="text-black text-center text-[40rem] opacity-50">0</p>
                    </div>
                    <h2 className="text-white w-full text-center text-4xl z-10">{pageData.introSubtitle}</h2>
                </div>
            </section>
        </BasisLayout>
    )
}

export default SamplePage;
