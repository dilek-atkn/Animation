'use client'

import React from 'react'
import {gsap} from "gsap";
import {Physics2DPlugin} from "gsap/Physics2DPlugin";
import {GSDevTools} from "gsap/GSDevTools";
import BasisLayout from "@/app/physics/BasisLayout";

gsap.registerPlugin(Physics2DPlugin, GSDevTools);

const Confetti = () => {
    const onClick = () => {
        let dots = [],
            bg = document.querySelector("#confettiBackground"),
            i, dot;

        const rdmSize = (Math.random() * (0.9 - 0.5) + 0.5) * 10;
        console.log(rdmSize)

        // create 80 dot elements and put them in an array
        for (i = 0; i < 80; i++) {
            dot = document.createElement("div");
            dot.setAttribute("class", `dot absolute rounded-[50%] w-[20px] h-[20px] transform`);
            bg?.appendChild(dot);
            dots.push(dot);
        }

        //set the initial position of all the dots, and pick a random color for each from an array of colors
        gsap.set(dots, {
            backgroundColor: "random([#00FF40,#2E2EFE,#FFFF00, #FF00BF, #9A2EFE])",
            width: rdmSize,
            height: rdmSize,
            scale: "random(0.4, 1)",
            x: 250,
            y: 300
        });

        // create the physics2D animation
        gsap.to(dots, {
            duration: 2.5,
            physics2D: {
                velocity: "random(250, 530)",
                angle: "random(250, 290)",
                gravity: 600
            },
            delay: "random(0, 2.5)"
        });
    }

    return (
        <BasisLayout>
            <div id="confettiBackground" className="confetti h-72 overflow-hidden relative w-[500px]"></div>
            <button id='button' className="button active:translate-y-1 bg-black h-12 w-64 text-white shadow-bottom"
                    onClick={onClick}>Click me
                :)
            </button>
        </BasisLayout>
    )
}

export default Confetti;
