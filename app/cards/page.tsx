'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import './style.css'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import CardsComponent from "@/app/cards/partials/CardsComponent";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin, DrawSVGPlugin);
const Cards = () => {
    useEffect(() => {
        ScrollSmoother.create({
            wrapper: "smooth-wrapper",
            content: "smooth-content",
        });
    });

    return (
        <div id="smooth-wrapper">
            <div className="smooth-content">
                <DraggableHomeButton/>
                <div id='content'
                     className="content flex justify-center flex-col">
                    <CardsComponent/>
                </div>
            </div>
        </div>
    )
}

export default Cards;
