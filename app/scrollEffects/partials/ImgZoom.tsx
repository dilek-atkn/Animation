"use client";

import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {zoomImg} from "@/app/scrollEffects/data";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ImgZoom = () => {
    useEffect(() => {

        let LandingPageScrollTrigger = gsap.timeline({
            scrollTrigger: {
                trigger: "#ImgWrapper",
                start: "0% 0%",
                end: "100% 0%",
                pin: "#ImgWrapper",
                scrub: 2.5,
            },
        });
        LandingPageScrollTrigger.to(
            "#ImgWrapper #img7",
            {transform: "translateZ(4500px)"},
            0
        )
            .to("#ImgWrapper #img6", {transform: "translateZ(3700px)"}, 0)
            .to("#ImgWrapper #img5", {transform: "translateZ(3100px)"}, 0)
            .to("#ImgWrapper #img4", {transform: "translateZ(2800px)"}, 0)
            .to("#ImgWrapper #img3", {transform: "translateZ(2600px)"}, 0)
            .to("#ImgWrapper #img2", {transform: "translateZ(2400px)"}, 0)
            .to("#ImgWrapper #img1", {transform: "translateZ(2200px)"}, 0);
    }, []);

    return (
        <div id="ImgWrapper">
            <img id="img1" src={zoomImg[0]} alt="img1"/>
            <img id="img2" src={zoomImg[1]} alt="img2"/>
            <img id="img3" src={zoomImg[2]} alt="img3"/>
            <img id="img4" src={zoomImg[3]} alt="img4"/>
            <img id="img5" src={zoomImg[4]} alt="img5"/>
            <img id="img6" src={zoomImg[5]} alt="img6"/>
            <img id="img7" src={zoomImg[6]} alt="img7"/>
            <div className="afterZoomContainer">
                <div className="font-bold text-4xl">After Zoom</div>
            </div>
        </div>
    );
};

export default ImgZoom;
