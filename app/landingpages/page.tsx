'use client'

import React from 'react'
import {gsap} from "gsap";
import './style.css'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin, DrawSVGPlugin);
const SamplePage = () => {

    const buttonClasses = "w-32 p-3 bg-blue-950 text-white m-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-center"
    return (
        <div className='flex justify-center items-center flex-col h-screen bg-blue-100'>
            <DraggableHomeButton/>
            <h1 className=' w-full bg-blue-100 text-4xl text-center mb-12'>Landingpages</h1>
            <a href='/landingpages/intro' className={buttonClasses}>Intro</a>
            <a href='/landingpages/intro2' className={buttonClasses}>Intro2</a>
            <a href='/landingpages/intro3' className={buttonClasses}>Intro3</a>
        </div>
    )
}

export default SamplePage;
