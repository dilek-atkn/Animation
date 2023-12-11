"use client";

import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";

const MagneticButton = () => {
    const ref = useRef<any>(null);

    useEffect(() => {
        const xTo = gsap.quickTo(ref.current, "x", {duration: 1, ease: "elastic.out(1,0.3)"})
        const yTo = gsap.quickTo(ref.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        const mouseMove = (e: any) => {
            const {clientX, clientY} = e;
            const {width, height, left, top} = ref.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x)
            yTo(y)
        }

        const mouseLeave = (e: any) => {
            xTo(0);
            yTo(0);
        }

        ref.current.addEventListener("mousemove", mouseMove);
        ref.current.addEventListener("mouseleave", mouseLeave);

        return () => {
            ref.current.addEventListener("mousemove", mouseMove);
            ref.current.addEventListener("mouseleave", mouseLeave);
        }
    }, [])

    return (
        <div>
            <DraggableHomeButton/>
            <div className="flex justify-center items-center h-[50vh] flex-col bg-black">
                <div className="font-bold text-4xl p-5 text-center text-white mb-10">Magnetic Button</div>
                <div ref={ref}
                     className="flex justify-center items-center h-[150px] w-[200px]">
                    <a href="/"
                       className="magnetic-button flex justify-center items-center border-solid border-[#85acf1] border h-[50px] w-[90px] text-white">Hi:)
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MagneticButton;
