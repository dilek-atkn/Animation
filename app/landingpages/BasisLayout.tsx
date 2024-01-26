'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import './style.css'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {LayoutProps} from "@/interfaces/pages";
import Menu1 from "@/app/headers/partials/Menu1";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin, DrawSVGPlugin);
const BasisLayout = ({children}: LayoutProps) => {
    useEffect(() => {
        ScrollSmoother.create({
            wrapper: "smooth-wrapper",
            content: "smooth-content",
        });
    });

    return (
        <div id="smooth-wrapper">
            <div className="smooth-content">
                <Menu1/>
                <div className="flex justify-center flex-col items-center">
                    {children}
                    <div id='content'
                         className="content flex w-full justify-center flex-col">
                        <div
                            className="flex justify-center items-center h-screen">
                            Content
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasisLayout;
