"use client";

import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    useEffect(() => {
        let images = gsap.utils.toArray(".box-image");
        gsap.set(".box-image", {backgroundPosition: "43% 100%"});
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
            <div className="box-image"></div>
            <div className="box-image"></div>
            <div className="box-image"></div>
            <div className="box-image"></div>
            <div className="box-image"></div>
            <div className="box-image"></div>
        </div>
    );
};

export default HorizontalScroll;
