"use client";

import React from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {pageData} from "@/app/scrollEffects/data";
import useMousePosition from "@/utils/helper";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ChangingBackground = () => {
    const clientX = useMousePosition();

    function OnMove(clientX: number) {
        const snapEdges = gsap.utils.snap({
                values: [0, window.innerWidth],
                radius: 100,
            }),
            widthToProgress = gsap.utils.mapRange(0, window.innerWidth, 0, 1),
            interpColor = gsap.utils.interpolate(
                "linear-gradient(#e66465, #9198e5)",
                "linear-gradient(#c01fa4, #4755f1)"
            ),
            widthToColor = gsap.utils.pipe(snapEdges, widthToProgress, interpColor);

        const container = document.getElementById(
            "backgroundcolor-change"
        ) as HTMLInputElement;
        container.style.background = widthToColor(clientX);

        console.log("___", widthToColor(clientX));
    }

    return (
        <div
            className="flex h-screen-[50vh] p-5 flex-col"
            onMouseMove={() => OnMove(clientX.x)}
            id="backgroundcolor-change"
        >
            <div className="font-bold text-4xl p-5 text-center">Move the mouse to left and right</div>
            <div>
                <p>{pageData.longText}</p>
                <br/>
                <p>{pageData.longText}</p>
            </div>
        </div>
    );
};

export default ChangingBackground;
