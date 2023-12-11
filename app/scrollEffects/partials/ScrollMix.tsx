"use client";

import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollMix = () => {
    useEffect(() => {
        document.body.style.overflow = "auto";
        document.scrollingElement?.scrollTo(0, 0);

        gsap.utils.toArray("section").forEach((section: any, index) => {
            const w = section.querySelector(".wrapper");
            const [x, xEnd] =
                index % 2
                    ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
                    : [w.scrollWidth * -1, 0];
            gsap.fromTo(
                w,
                {x},
                {
                    x: xEnd,
                    scrollTrigger: {
                        trigger: section,
                        scrub: 0.5,
                    },
                }
            );
        });

    }, []);


    return (
        <div className='basis-full'>
            <header className='flex items-center justify-center flex-col basis-full h-[50vh]'>
                <div>
                    <h1 className='text-7xl'>ScrollTrigger</h1>
                </div>
            </header>
            <section className="demo-text">
                <div className="wrapper flex text text-[12rem] leading-none font-black">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            </section>
            <section className="demo-gallery">
                <ul className="wrapper flex pl-4 list-none">
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=128"
                            width="450"
                            alt="img"
                        />
                    </li>
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=10"
                            width="450"
                            alt="img"
                        />
                    </li>
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=91"
                            width="450"
                            alt="img"
                        />
                    </li>
                </ul>
            </section>
            <section className="demo-gallery">
                <ul className="wrapper flex pl-4 list-none">
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=12"
                            width="450"
                            alt="img"
                        />
                    </li>
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=20"
                            width="450"
                            alt="img"
                        />
                    </li>
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=145"
                            width="450"
                        />
                    </li>
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=22"
                            width="450"
                            alt="img"
                        />
                    </li>
                </ul>
            </section>
            <section className="demo-gallery">
                <ul className="wrapper flex pl-4 list-none">
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=61"
                            width="450"
                            alt="img"
                        />
                    </li>
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=70"
                            width="450"
                            alt="img"
                        />
                    </li>
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=112"
                            width="450"
                            alt="img"
                        />
                    </li>
                </ul>
            </section>
            <section className="demo-gallery">
                <ul className="wrapper flex pl-4 list-none">
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=88"
                            width="450"
                            alt="img"
                        />
                    </li>
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=35"
                            width="450"
                            alt="img"
                        />
                    </li>
                    <li className='pr-4 shrink-0'>
                        <img
                            className="mix-img w-full h-auto bg-[#f0f0f0]"
                            height="317"
                            src="https://source.unsplash.com/random/450x317?sig=92"
                            width="450"
                            alt="img"
                        />
                    </li>
                </ul>
            </section>
            <section className="demo-text">
                <div className="wrapper flex text text-[12rem] leading-none font-black">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            </section>

            <script async src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
            <script
                async
                src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"
            ></script>
            <script
                async
                src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"
            ></script>
        </div>
    );
};

export default ScrollMix;
