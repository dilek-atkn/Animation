'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import './style.css'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import Intro from "@/app/landingpage/partials/Intro";
import Header from "@/components/Header/Header";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin, DrawSVGPlugin);
const SamplePage = () => {
    useEffect(() => {
        ScrollSmoother.create({
            wrapper: "smooth-wrapper",
            content: "smooth-content",
        });
    });

    /*useEffect(() => {

    }, []);*/

    return (
        <div id="smooth-wrapper">
            <div className="smooth-content">
                <Header/>
                <div className="flex justify-center flex-col items-center">
                    <Intro/>
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

export default SamplePage;
