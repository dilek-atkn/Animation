"use client";

import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const HorizontalScroll = () => {
    useEffect(() => {
        let images = gsap.utils.toArray(".img");
        gsap.set(".img", {backgroundPosition: "43% 100%"});
        gsap.to(images, {
            xPercent: -45 * images.length,
            ease: "none",
            scrollTrigger: {
                trigger: ".box",
                pin: true,
                scrub: 2,
                end: "+=100%",
            },
            backgroundPosition: "60% 100%",
        });
    }, []);

    return (
        <div className="box">
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
        </div>
    );
};

export default HorizontalScroll;
