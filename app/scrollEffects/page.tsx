"use client";

import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";
import ImgZoom from "@/app/scrollEffects/partials/ImgZoom";
import TextFadeIn from "@/app/scrollEffects/partials/TextFadeIn";
import HorizontalScroll from "@/app/scrollEffects/partials/HorizontalScroll";
import ScrollMix from "@/app/scrollEffects/partials/ScrollMix";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollingEffects = () => {
    useEffect(() => {
        ScrollSmoother.create({
            wrapper: "smooth-wrapper",
            content: "smooth-content",
        });
    }, []);

    return (
        <div id="smooth-wrapper">
            <DraggableHomeButton/>
            <div className="smooth-content">
                <div className="largeContainer font-bold text-4xl">Scroll ;)</div>
                <HorizontalScroll/>
                <TextFadeIn/>
                <ImgZoom/>
                <ScrollMix/>
                <div className="largeContainer font-bold text-4xl">End</div>
            </div>
        </div>
    );
};

export default ScrollingEffects;
