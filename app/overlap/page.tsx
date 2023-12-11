'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import './style.css'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import Intro from "@/app/overlap/partials/Intro";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const HorizontalScroll = () => {

    useEffect(() => {
        ScrollSmoother.create({
            wrapper: "smooth-wrapper",
            content: "smooth-content",
        });
    });


    useEffect(() => {
        let sections = gsap.utils.toArray(".panel");

        let scrollTween = gsap.to(sections, {
            xPercent: (i) => -100 * i,
            duration: (i) => 0.5 * i,
            ease: "none", // <-- IMPORTANT!
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 0.1,
                //snap: directionalSnap(1 / (sections.length - 1)),
                end: "+=3000"
            }
        });

        sections.forEach((panel: any) => {
            ScrollTrigger.create({
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left 25%",
            });
        });

        ScrollTrigger.create({
            animation: gsap.from(".logo", {
                y: "50vh",
                scale: 4,
                yPercent: -50
            }),
            scrub: true,
            trigger: ".container-2",
            start: "top bottom",
            endTrigger: '.container-2',
            end: 'top center',
            pin: true,
            pinSpacing: false
        });
    }, []);

    return (
        <div id="smooth-wrapper">
            <div className="smooth-content">
                <div className='container'>
                    <div className='panel'>
                        <h1 className='nav'>HOME</h1>
                        <div className="container-2"></div>
                        <Intro/>
                    </div>
                    <div className='panel'>
                        <h1 className='nav'>ONE</h1>
                        <p>
                            Some Content.
                        </p>
                    </div>
                    <div className='panel'>
                        <h1 className='nav'>TWO</h1>
                        <p>
                            Some Content.
                        </p>
                    </div>
                    <div className='panel target'>
                        <h1 className='nav'>THREE</h1>
                        <p>
                            Some Content.
                        </p>
                    </div>
                    <div className='panel'>
                        <h1 className='nav'>FOUR</h1>
                        <p>
                            Some Content.
                        </p>
                    </div>
                    <div className='panel'>
                        <h1 className='nav'>FIVE</h1>
                        <p>
                            Some Content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalScroll;
