'use client'

import React from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import Menu2 from "@/app/headers/partials/Menu2";
import Menu1 from "@/app/headers/partials/Menu1";
import Menu3 from "@/app/headers/partials/Menu3";
import Menu4 from "@/app/headers/partials/Menu4";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin, DrawSVGPlugin);
const SamplePage = () => {
    return (
        <div className='flex flex-col gap-2'>
            <Menu1/>
            <Menu2/>
            <Menu3/>
            <Menu4/>
        </div>
    )
}

export default SamplePage;
