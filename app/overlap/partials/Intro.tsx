'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(SplitText);
const Intro = () => {

    useEffect(() => {
        let typeSplit = new SplitText('[animate]', {
            types: 'lines, words, chars',
            tagName: 'h2'
        })

        gsap.from('[animate] .title', {
            y: '110%',
            opacity: 1,
            rotationZ: '10',
            duration: 0.3,
            ease: 'Second.in',
            stagger: 0.1,

        })
    }, []);

    return (
        <div className="flex justify-center items-center h-full w-full flex-col">
            <div className="title_container">
                <h2 className="title text-8xl font-bold text-gray-900 top-6" data-splitting>
                    HOW ARE MAKERS
                </h2>
                <h2 className="title text-8xl font-bold text-gray-900 top-6" data-splitting>
                    EXPERIENCING THE
                </h2>
                <h2 className="title text-8xl font-bold text-gray-900 top-6" data-splitting>
                    EFFECTS OF THE
                </h2>
                <h2 className="title text-8xl font-bold text-red-600 top-6" data-splitting>
                    GLOBAL PANDEMIC?
                </h2>
            </div>
        </div>
    )
}

export default Intro;
