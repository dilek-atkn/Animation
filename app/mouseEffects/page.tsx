"use client";

import React, {useEffect} from "react";
import "./style.css";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";
import ChangingBackground from "@/app/mouseEffects/partials/ChangingBackground";
import MagneticButton from "@/app/mouseEffects/partials/MagneticButton";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MouseEffects = () => {
    useEffect(() => {
        ScrollSmoother.create({
            wrapper: "smooth-wrapper",
            content: "smooth-content",
        });
    }, []);

    return (
        <div id="smooth-wrapper">
            <div className="smooth-content">
                <DraggableHomeButton/>
                <div className="flex flex-col">
                    <MagneticButton/>
                    <ChangingBackground/>
                </div>
            </div>
        </div>
    );
};

export default MouseEffects;
