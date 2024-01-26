'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(SplitText);
const StackUpCards = () => {
    useEffect(() => {
        let cards = Array.from(document.querySelectorAll('.card'));
        gsap.set(cards, {perspective: 1000, rotationY: -25});

        cards.forEach((card, i) => {
            const left = cards.slice(i + 1),
                right = cards.slice(0, i);

            card.addEventListener("mouseenter", () => {
                gsap.to(card, {rotationY: 0, scale: 1.15, x: 0, duration: 0.3, overwrite: true});
                if (right.length) {
                    gsap.to(right, {x: -180, rotationY: -25, duration: 0.3, scale: 1, overwrite: true});
                }
                if (left.length) {
                    gsap.to(left, {x: 100, rotationY: -25, duration: 0.3, scale: 1, overwrite: true});
                }
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(cards, {rotationY: -25, scale: 1, duration: 0.3, x: 0, overwrite: true});
            })
        });
    }, []);

    return (
        <div className="border-solid border-gray-500 border">
            <h1 className="w-full text-4xl mb-[80vh] text-center font-bold">Stacking Cards</h1>
            <div className='container w-full'>
                <div className='cards'>
                    <div className='stack-card top-[40px] h-52 w-96 bg-white text-4xl mb-12'>1</div>
                    <div className='stack-card top-[40px] h-52 w-96 bg-white text-4xl mb-12'>2</div>
                    <div className='stack-card top-[40px] h-52 w-96 bg-white text-4xl mb-12'>3</div>
                    <div className='stack-card top-[40px] h-52 w-96 bg-white text-4xl mb-12'>4</div>
                    <div className='stack-card top-[40px] h-52 w-96 bg-white text-4xl mb-12'>5</div>
                </div>
            </div>
            <div className='container2'>
            </div>
        </div>
    )
}

export default StackUpCards;
