"use client";

import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {pageData} from "@/app/scrollEffects/data";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const TextFadeIn = () => {
    useEffect(() => {
        gsap.to(".slideRight", {
            scrollTrigger: ".slideRight",
            x: 80,
        });
        gsap.to(".slideLeft", {
            scrollTrigger: {
                trigger: ".slideLeft",
                scrub: 1,
            },
            x: -80,
        });
        gsap.to(".slideUp", {
            scrollTrigger: ".slideUp",
            y: -80,
        });
    }, []);

    return (
        <div>
            <div className="contentContainer first">
                <div className="innerContainer">
                    <div className="slideRight text-1xl">{pageData.middleText}</div>
                </div>
            </div>
            <div className="contentContainer second">
                <div className="innerContainer">
                    <div className="slideLeft text-2xl">{pageData.middleText}</div>
                </div>
            </div>
            <div className="contentContainer third">
                <div className="slideUp text-1xl">{pageData.middleText}</div>
            </div>
        </div>
    );
};

export default TextFadeIn;
