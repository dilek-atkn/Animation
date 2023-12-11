'use client'

import React, {useEffect} from 'react'
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import {cardsData} from "@/app/cards/data";

gsap.registerPlugin(SplitText);
const CardsComponent = () => {
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
        <div
            className="flex justify-center items-center relative h-[50vh]">
            {cardsData.map((card, index) => (
                <Card
                    className="card w-80 h-[350px] bg-white rounded-lg shadow-lg shadow-gray-400 p-4 top-40 absolute"
                    key={card.text + index}
                    id={`card${index + 1}`}
                >
                    <CardContent className="m-2.5">
                        <h2 className="text-lg font-bold text-gray-700">
                            {card.title}
                        </h2>
                        <hr/>
                        <div className="flex flex-col mt-3 text-sm">
                            {card.text}
                        </div>
                        <a
                            className="border-solid border-gray-500 border text-xs text-[#e2001a] uppercase p-1.5 mt-3"
                            type="button"
                            href={card.buttonLink}>
                            Read More
                        </a>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default CardsComponent;
