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
        <div className={"mx-10"}>
            <div className={"font-serif text-4xl"}>My Process:</div>
            <div className={"md:flex md:flex-row"}>
                <div className="md:w-1/2 w-full">
                    <ECorpseComp imageArray={heads} index={indices[0]}/>
                    <ECorpseComp imageArray={body} index={indices[1]}/>
                    <ECorpseComp imageArray={feet} index={indices[2]}/>
                    <div className={"w-full text-center text-gray-400"}>Psst...I drew this. Check it on the project
                        page
                    </div>
                </div>
                <div className={"m-4 md:w-1/2"}>
                    <div>
                        <div className={"font-serif"}> Step 1:</div>
                        <div className={"font-handwritten text-xl"}>Define the Project's Identity:</div>
                        <div className={"font-serif"}>
                            I like to create a character to represent the project. I can imagine setting up an interview
                            with them. Asking them questions. Everything I make is guided by this persona.
                            <p className={"my-2"}> Sometimes this persona shifts over time, and sometimes it stays
                                consistent. If the project is a redesign this step can take a long time; Looking at
                                other
                                things the brand has made or put out, reading through their copy. Anything and
                                everything I
                                can to get to know the project as a person.
                            </p>
                        </div>
                    </div>
                    <div className={"my-10"}>
                        <div className={"font-serif"}> Step 2:</div>
                        <div className={"font-handwritten text-xl"}>Set the mood:</div>
                        <div className={"font-serif"}>
                            <p className={""}>
                                I use my project's persona to build a collage or moodboard that sets the tone of the
                                project. I like to imagine this board as the guide for aesthetic decision.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className={"m-4 md:flex md:flex-row gap-4"}>
                <div>
                    <div className={"font-serif"}> Step 3:</div>
                    <div className={"font-handwritten text-xl"}>Brush in the Major Aesthetics:</div>
                    <div className={"font-serif"}>
                        If the brand is established and not being redesigned, this can be skipped. But using the collage
                        and moodboard and decide major concepts:
                        <ul className={"mx-4"}>
                            <li className={"flex flex-row gap-2"}>{club}Overall Colour palette</li>
                            <li className={"flex flex-row gap-2"}>{heart}Sharp or rounded corners</li>
                            <li className={"flex flex-row gap-2"}>{spade}The font combinations</li>
                            <li className={"flex flex-row gap-2"}>{diamond}Major iconography</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={"font-serif my-4 md:my-0"}> Step 4:</div>
                    <div className={"font-handwritten text-xl"}>Create a shopping list:</div>
                    <div className={"font-serif"}>
                        What do we need? What do we want? What's important? What can stay - what must go? This is a long
                        laundry list of all of that.
                        <div className={"my-2"}> More importantly: what's the purpose? Do we need to direct users to a
                            dales team? Do we need to give them information? What's the aim?</div>
                    </div>
                </div>
            </div>

            <div>
                <div className={"font-serif "}> Steps 5, 6 and 7:</div>
                <div className={"font-handwritten text-2xl"}>The Design Loop:</div>
                <div className={"font-serif w-full text-center"}>This is a common design philosophy in the game's
                    industry. The idea is to make something small, fast, and test as fast as possible. Every iteration
                    is a small change.
                </div>
                <div className={"font-serif md:grid md:grid-cols-2 md:gap-10"}>
                    <div>

                        <div className={"font-handwritten text-xl mt-3"}>Rapid Prototype:</div>
                        <div>
                            Game Designers make tiny prototypes with the intention of testing. Traditional artists draw
                            thumbnails to test composition. Knitters knit small blocks to
                            determine their gauge. UI/UX Designers call this wireframing.
                        </div>
                    </div>
                    <div>
                        <div className={"font-handwritten text-xl mt-3"}>Test and Iterate Loop:</div>
                        <div>
                            This is the loop that makes me the strongest designer I can be. Small changes at every step
                            to get me to the best option.
                        </div>
                    </div>

                </div>
            </div>
            <div className={"my-4"}>
                <div className={"font-serif"}> Step 8:</div>
                <div className={"font-handwritten text-xl"}>The Final Step:</div>
                <div className={"font-serif"}>
                    Finally, we can start to build the design in figma. Mobile Designs always get built first - because
                    development-conscious design has to take the idea of responsive development into their build.
                </div>
            </div>
        </div>

    );
}