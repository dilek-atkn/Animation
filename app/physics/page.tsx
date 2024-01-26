'use client'

import React from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";
import Confetti from "@/app/physics/partials/Confetti";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin, DrawSVGPlugin);
const SamplePage = () => {
    return (
        <div
            className="bg-white flex w-full justify-center flex-col h-screen items-center">
            <DraggableHomeButton/>
            <h1 className='w-full pt-20 text-4xl text-center mb-12'>Physics2D</h1>
            <Confetti/>
        </div>
    )
}

export default SamplePage;
