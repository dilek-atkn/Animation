'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";
import {pageData} from "@/app/landingpages/data";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import BasisLayout from "@/app/landingpages/BasisLayout";

gsap.registerPlugin(ScrollTrigger, SplitText);
const SamplePage = () => {


    useEffect(() => {
        const section = document.querySelector("section");

        gsap.set(section, {autoAlpha: 1});

        const splitHide = new SplitText(section, {type: "words", wordsClass: "hide"});
        const split = new SplitText(section, {
            type: "words,lines",
            wordsClass: "words",
            linesClass: "lines"
        });

        gsap.from(split.words, {
            repeat: 0,
            duration: 1,
            yPercent: 100,
            stagger: 0
        })
    }, []);

    useEffect(() => {
        let getRatio = (el: any) => window.innerHeight / (window.innerHeight + el.offsetHeight);
        const section = document.querySelector("section");
        const bg = document.getElementsByClassName("bg");

        gsap.fromTo(bg, {
            backgroundPosition: () => `50% ${-window.innerHeight * getRatio(section)}px`
        }, {
            backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: () => "top bottom",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true // to make it responsive
            }
        });
    }, []);

    return (
        <BasisLayout>
            <section id='intro' className="flex w-full flex-col h-screen">
                <div
                    className="bg bg-intro-2 z-0 flex w-full justify-center flex-col h-screen items-center text-center bg-cover">
                    <h1 className="text-white w-full text-center text-6xl">{pageData.introTitle}</h1>
                    <h2 className="text-white w-full text-center text-4xl">{pageData.introSubtitle}</h2>
                </div>
            </section>
        </BasisLayout>
    )
}

export default SamplePage;
