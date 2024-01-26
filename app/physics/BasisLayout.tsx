'use client'

import React from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {LayoutProps} from "@/interfaces/pages";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin, DrawSVGPlugin);
const BasisLayout = ({children}: LayoutProps) => {


    return (
        <div
            className="bg-white z-0 flex w-full justify-center flex-col h-screen items-center text-center bg-cover">
            {children}
        </div>
    )
}

export default BasisLayout;
