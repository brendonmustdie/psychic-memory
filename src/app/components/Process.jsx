'use client'
import {useEffect, useState} from "react";
import ECorpseComp from "@/app/components/ECorpse";

export default function Process() {

    const diamond = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="#dc2626"
                         className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
        <path
            d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2"/>
    </svg>

    const spade = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5C5C5C"
                       className="bi bi-suit-spade-fill" viewBox="0 0 16 16">
        <path
            d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/>
    </svg>

    const heart = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DC2626"
                       className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
        <path
            d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
    </svg>

    const club = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5C5C5C"
                      className="bi bi-suit-club-fill" viewBox="0 0 16 16">
        <path
            d="M11.5 12.5a3.5 3.5 0 0 1-2.684-1.254 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5"/>
    </svg>

    const heads = [
        {image: "/images/illustrations/apple1.png"},
        {image: "/images/illustrations/chesspiece1.png"},
        {image: "/images/illustrations/ladybug1.png"},
        {image: "/images/illustrations/russiandoll1.png"},
    ];

    const body = [
        {image: "/images/illustrations/apple2.png"},
        {image: "/images/illustrations/chesspiece2.png"},
        {image: "/images/illustrations/ladybug2.png"},
        {image: "/images/illustrations/russiandoll2.png"},
    ];

    const feet = [
        {image: "/images/illustrations/apple3.png"},
        {image: "/images/illustrations/chesspiece3.png"},
        {image: "/images/illustrations/russiandoll3.png"},
        {image: "/images/illustrations/ladybug3.png"},
    ];
    const [indices, setIndices] = useState([0, 1, 2]); // head, body, feet

    const getUniqueIndices = () => {
        const used = new Set();
        const result = [];

        while (result.length < 3) {
            const rand = Math.floor(Math.random() * heads.length);
            if (!used.has(rand)) {
                used.add(rand);
                result.push(rand);
            }
        }

        return result;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndices(getUniqueIndices());
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={"md:flex md:flex-row container mx-auto my-4"}>
            <div>
                <h2 className={"font-handwritten text-xl mx-2"}>Exquisite Corpse Component:</h2>
                <p className={"font-serif mx-2"}>I had a vision of this component which I hoped to use to describe my
                    creative process. Months down
                    the line - it didn't work for me anymore. But I think the illustrations are just too cute not to
                    include in my portfolio. Here's a look at the component itself!</p>
            </div>
            <div className="md:w-1/2">
                <ECorpseComp imageArray={heads} index={indices[0]}/>
                <ECorpseComp imageArray={body} index={indices[1]}/>
                <ECorpseComp imageArray={feet} index={indices[2]}/>
                {/*<div className={"w-full text-center text-gray-400"}>Psst...I drew this. Check it on the project*/}
                {/*    page*/}
                {/*</div>*/}
            </div>
        </div>

    );
}