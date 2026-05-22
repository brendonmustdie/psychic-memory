'use client'
import ScreenLayoutComp from "../../components/ScreenLayoutComp";
import HeaderComp from "../../components/HeaderComp";
import GenericContentComp from "../../components/GenericContentComp";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import FooterComp from "@/app/components/FooterComp";
import Link from "next/link";
import DividerComp from "@/app/components/DividerComp.jsx";
import Typewriter from 'typewriter-effect';
import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import shuffle from 'lodash.shuffle';

function ShuffleBoard({words}) {
    const [items, setItems] = useState(words);

    useEffect(() => {
        const interval = setInterval(() => {
            setItems((prev) => shuffle([...prev]));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-wrap gap-3">
            {items.map((word) => (
                <motion.div
                    key={word.id}
                    layout
                    className="px-3 py-2 bg-white text-black border rounded"
                    style={{rotate: Math.random() * 6 - 3}}
                >
                    {word.text}
                </motion.div>
            ))}
        </div>
    );
}

function ScratchBoard({words}) {
    const [state, setState] = useState(() => {
        const init = {};
        words.forEach((w) => {
            init[w.id] = "active";
        });
        return init;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setState((prev) => {
                const active = Object.entries(prev)
                    .filter(([, status]) => status === "active")
                    .map(([id]) => id);

                if (active.length === 0) return prev;

                const target = active[Math.floor(Math.random() * active.length)];

                return {
                    ...prev,
                    [target]: "scratching",
                };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        Object.entries(state).forEach(([id, status]) => {
            if (status !== "scratching") return;

            // scratch → remove
            const t1 = setTimeout(() => {
                setState((prev) => ({
                    ...prev,
                    [id]: "removed",
                }));

                // return after 5s
                const t2 = setTimeout(() => {
                    setState((prev) => ({
                        ...prev,
                        [id]: "active",
                    }));
                }, 5000);

                return () => clearTimeout(t2);
            }, 500);

            return () => clearTimeout(t1);
        });
    }, [state]);

    return (
        <div className="flex flex-wrap gap-3 font-serif">
            {words.map((word) => {
                const status = state[word.id];

                if (status === "removed") return null;

                return (
                    <motion.div
                        key={word.id}
                        layout
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                        }}
                        className="
                            px-3 py-2
                            bg-white
                            text-black
                            border
                            rounded-md
                            shadow-sm
                            select-none
                        "
                    >
                        <span
                            className={
                                status === "scratching"
                                    ? "line-through text-gray-400"
                                    : ""
                            }
                        >
                            {word.text}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
}

function ColumnBoard() {
    const columns = [
        {title: "STRATEGY", items: ["SEO", "STRUCTURE"]},
        {title: "EXPERIENCE", items: ["USERS", "CLARITY"]},
        {title: "LAYOUT", items: ["CONTENT", "HIERARCHY", "WHITESPACE"]},
    ];

    return (
        <div className="grid grid-cols-3 gap-6 font-serif">
            {columns.map((col) => (
                <div key={col.title}>
                    <div className="text-xs text-gray-400 mb-2">
                        {col.title}
                    </div>

                    {col.items.map((word) => (
                        <div
                            key={word}
                            className="px-3 py-2 bg-white border rounded mb-2 text-black"
                        >
                            {word}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default function Page() {


    const images = [
        {
            image: "/images/profileTree/Screens1.png",
        },
        {
            image: "/images/profileTree/Screens2.png",
        },
        {
            image: "/images/profileTree/Screens3.png",
        },
        {
            image: "/images/profileTree/Screens4.png",
        },
        {
            image: "/images/profileTree/Screens5.png",
        },
        {
            image: "/images/profileTree/Screens6.png",
        },
        {
            image: "/images/profileTree/Screens7.png",
        },
        {
            image: "/images/profileTree/Screens8.png",
        },
        {
            image: "/images/profileTree/Screens9.png",
        },
        {
            image: "/images/profileTree/Screens10.png",
        },
        {
            image: "/images/profileTree/Screens11.png",
        },
        {
            image: "/images/profileTree/Screens12.png",
        },
        {
            image: "/images/profileTree/Screens13.png",
        },
        {
            image: "/images/profileTree/Screens14.png",
        },
        {
            image: "/images/profileTree/Screens15.png",
        },
        {
            image: "/images/profileTree/Screens16.png",
        },
        {
            image: "/images/profileTree/Screens17.png",
        },
        {
            image: "/images/profileTree/Screens18.png",
        },

    ]

    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                       className="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
    </svg>

    const star = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FFD700"
                      className="bi bi-star-fill" viewBox="0 0 16 16">
        <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>

    const BASE_WORDS = [
        {id: 1, text: "CONTENT"},
        {id: 2, text: "STRUCTURE"},
        {id: 3, text: "SEO"},
        {id: 4, text: "CLARITY"},
        {id: 5, text: "USERS"},
        {id: 6, text: "HIERARCHY"},
        {id: 7, text: "WHITESPACE"},
    ];

    const [words, setWords] = useState(BASE_WORDS);
    const MODES = {
        SHUFFLE: "shuffle",
        SCRATCH: "scratch",
        COLUMNS: "columns",
    };

    const [mode, setMode] = useState(MODES.SHUFFLE);

    useEffect(() => {
        const interval = setInterval(() => {
            setWords((prev) => {
                // occasional "pause" effect so it doesn't feel robotic
                if (Math.random() < 0.2) return prev;
                return shuffle([...prev]);
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen">
            <div className={"flex flex-row"}>
                <HomeButtonComp></HomeButtonComp>
            </div>
            <ScreenLayoutComp
                leftComponent={
                    <HeaderComp
                        heading="ProfileTree"
                        subheading="Design task"
                    />
                }
                rightComponent={
                    <>
                        <GenericContentComp
                            heading="The Task"
                            content={
                                <>
                                    <p>
                                        I applied for a design position with ProfileTree - an Irish-based SEO company. I
                                        got
                                        shortlisted and asked to build this design. While I ultimately did not get
                                        selected
                                        for the position, I enjoyed the process and was proud of my work.
                                    </p>
                                    <p>
                                        You can view the Figma design file here:
                                        <br/>
                                        <a className={"text-blue-500 font-bold underline-offset-4 underline"}
                                           href={"https://www.figma.com/design/c0XMMsgTonf3NqcbKRVOhc/ProfileTree_SEO?node-id=0-1&t=YzZ0YNGWowJxlzVg-1"}>Figma
                                            Design File</a>
                                    </p>
                                    <p>Keep scrolling to get a look at the process or <Link href={"#final-product"}
                                                                                            className={'bg-green-950 border p-2 rounded-full border-black hover:border-green-950'}>Skip
                                        to the final product</Link></p>
                                </>
                            }
                        />
                    </>

                }
            />

            <div className={"container mx-auto"}>
                <div className={"bg-green-950 font-serif p-4"}>
                    <div className={"mx-10"}>
                        <div className={"font-bold text-2xl my-2"}>Table of Contents</div>
                        <div className={"mx-10 my-2 text-xl"}>
                            <ul>
                                <li className={"my-2"}><Link href={"#context"}>Context</Link></li>
                                <li className={"my-2"}><Link href={"#research"}>
                                    Research: ProfileTree's SEO Page
                                </Link></li>
                                <li className={"my-2"}><Link href={"#problem"}>The Problem.</Link></li>
                                <li className={"my-2"}><Link href={"#conceptualize"}>Conceptualize</Link></li>
                                <li className={"my-2"}><Link href={"#problem2"}>The Problem, Part 2: Electric
                                    Boogaloo</Link>
                                </li>
                                <li className={"my-2"}><Link href={"#conceptualize2"}>Conceptualize (From
                                    Scratch)</Link>
                                </li>
                                <li className={"my-2"}><Link href={"#wireframes"}>Wireframes & Mock-ups</Link></li>
                                <li className={"my-2"}> The Final Product</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section id={"context"} className={"mx-10 my-5 font-serif"}>
                    <div className={"text-2xl font-serif"}>Context:</div>
                    <div className={"mb-4"}>In April 2026, I applied for a UI designer position with ProfileTree - and
                        received this design
                        task for my application, from a message on Indeed!
                    </div>
                    <div className={"flex flex-row"}>
                        <div className={"h-20 p-4 rounded-full bg-green-950 content-center"}>
                            <div className={"text-center"}>Ciaran</div>
                        </div>
                        <div
                            className="relative ml-4 rounded-lg border border-gray-300 bg-white p-4 text-black shadow-sm
  after:absolute after:right-full after:top-4 after:content-['']
  after:border-[10px] after:border-transparent after:border-r-white
  before:absolute before:right-full before:top-4 before:mr-[1px] before:content-['']
  before:border-[11px] before:border-transparent before:border-r-gray-300"
                        >
                            <div className={"font-bold text-lg"}>The Task</div>
                            Your brief is to redesign this page so it looks professional, is easy to read, and would
                            turn a
                            visitor into an enquiry. You're not rewriting the content (though you can tighten headings
                            if
                            needed). You're redesigning the layout, visual hierarchy, imagery, spacing, and overall
                            presentation.
                            <div className={"font-bold"}>
                                A note on the existing page</div>
                            The current page is long and content-heavy. That's partly by design for SEO, but we know it
                            needs
                            work and we're open to your thinking.
                            <div>
                                You can restructure, condense, or reorganise the content blocks as you see fit. What we
                                don't
                                want
                                is content removed sim ply to make the page look cleaner. If you're cutting something,
                                tell
                                us
                                why in
                                your notes. On client sites, content decisions always need a reason behind them, and we
                                want
                                to
                                see
                                that you think that way.</div>
                            <div>
                                The goal is the best possible page, not a faithful reproduction of what's already there.
                                Show us
                                what you'd do and why.
                            </div>

                            <div className={"font-bold"}>

                                What we're looking for
                            </div>
                            <div className={"mx-10"}>
                                <li>
                                    A clear visual hierarchy. The most important message should be the first thing a
                                    visitor
                                    sees.
                                    Good use of whitespace. Give the content room to breathe.
                                </li>
                                <li> Typography that works on screen. Readable sizes, sensible line lengths, clear
                                    contrast.
                                </li>
                                <li> Imagery that fits. You can use free stock images (Unsplash, Pexels) or AI-generated
                                    images.
                                    Show us
                                    what you'd choose and why.
                                </li>
                                <li>
                                    A design that works on mobile. We don't need a full responsive build, but show us
                                    you've
                                    thought
                                    about it.
                                </li>
                            </div>
                            <div className={"font-bold"}>

                                What we're NOT looking for
                            </div>
                            <div className={"mx-10"}>
                                <li> A complete site rebuild. This is a focused exercise on one page.
                                </li>
                                <li>
                                    Lengthy presentation decks. Show us the work.
                                </li>
                            </div>

                        </div>
                    </div>
                    <DividerComp></DividerComp>
                </section>
                <section id={"research"} className={"mx-10 my-5 font-serif"}>
                    <div className={"text-2xl font-serif"}>Research: ProfileTree's SEO Page.</div>
                    <div className={"m-2"}> When I visited the page in question - my gut clenched in anxiety. "Content
                        heavy" was an absolute understatement for the amount of content ProfileTree's page contained.
                    </div>
                    <div className={"m-2"}>Without much time to design the page - which featured several page's worth of
                        content - I jumped in
                        immediately in trying to figure out what information could be removed, and what could be kept.
                        Later, you'll understand why this was a mistake.
                    </div>
                    <div className={"m-2"}>
                        <Typewriter
                            options={{
                                strings: ['I retyped all of the information on the page by hand, on to a notion page.'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>
                    <div className={"m-2"}>I did this so that I could decide, line by line, which information to keep
                        and
                        which to get rid of.
                        Using Notion was a good choice, because it allowed me the option to drag-and-drop text blocks
                        when I
                        decided to rearrange them. Thankfully, I kept everything I'd written!
                    </div>
                    <DividerComp></DividerComp>


                </section>

                <section id={"#problem"} className={"mx-10 my-5 font-serif"}>
                    <div className={"text-2xl font-serif my-2"}>The Problem</div>

                    <div className={"flex flex-row"}>
                        <div className={"w-60"}></div>
                        <div
                            className="relative mr-4 rounded-lg border border-gray-300 bg-white p-4 text-black shadow-sm
  after:absolute after:left-full after:top-4 after:content-['']
  after:border-[10px] after:border-transparent after:border-l-white
  before:absolute before:left-full before:top-4 before:ml-[1px] before:content-['']
  before:border-[11px] before:border-transparent before:border-l-gray-300"
                        >Usually when you visit a website that offers a service, they withold as much information as
                            they
                            can. Because as soon as you talk to a sale's representative, they can sell you things you
                            don't
                            need. This web page isn't doing that. I feel a bit lost.
                        </div>
                        <div className={"h-20 p-7 rounded-full bg-green-950 content-center"}>
                            <div className={"text-center"}>Me</div>
                        </div>
                    </div>
                    <div className={"flex flex-row mt-2"}>

                        <div className={"h-20 p-6 rounded-full bg-green-950 content-center"}>
                            <div className={"text-center"}>BFF</div>
                        </div>
                        <div
                            className="relative ml-4 rounded-lg border border-gray-300 bg-white p-4 text-black shadow-sm
  after:absolute after:right-full after:top-4 after:content-['']
  after:border-[10px] after:border-transparent after:border-r-white
  before:absolute before:right-full before:top-4 before:mr-[1px] before:content-['']
  before:border-[11px] before:border-transparent before:border-r-gray-300">
                            <div>You got this! I believe in you.</div>
                        </div>
                    </div>

                    <div className={"mt-10"}>I was convinced the problem with ProfileTree's webpage, was that it broke
                        convention in a few important ways. And I was going to restore that convention.
                    </div>
                    <div className={"grid grid-cols-2 mt-2 text-center"}>
                        <div className={"bg-white rounded-l-full text-black p-2"}>
                            <div>ProfileTree's Website:</div>
                        </div>
                        <div className={"bg-green-950 p-2 rounded-r-full"}>
                            <div>Conventional Website:</div>
                        </div>
                    </div>

                    <div className={"grid grid-cols-3 grid-rows-8 mt-2 mx-10"}>
                        <div>
                            Gives the user
                            information to make decisions, without our team's invovlement.
                        </div>

                        <div className={"flex items-center justify-center"}>
                            {arrow}
                        </div>

                        <div> Guides the user to an expert who can sell them the service.
                        </div>
                    </div>
                    <div className={"bg-gray-400 h-1 w-full"}></div>

                    <div className={"grid grid-cols-3 grid-rows-8 mt-2 mx-10"}>
                        <div className={"my-2"}>Too much copy, too much jargon.</div>
                        <div className={"flex items-center justify-center"}>
                            {arrow}
                        </div>
                        <div className={"my-2"}>Leaves the user with questions, to guide them to our contact page.</div>
                    </div>
                    <div className={"bg-gray-400 h-1 w-full"}></div>

                    <div className={"grid grid-cols-3 grid-rows-8 mt-2 mx-10"}>
                        <div>Unbroken blocks of text without visual interest.</div>
                        <div className={"flex items-center justify-center"}>
                            {arrow}
                        </div>
                        <div>Pictures and unique visual breaks between information.</div>
                    </div>

                </section>
                <DividerComp></DividerComp>
                <section id={"conceptualize"} className={"mx-10"}>
                    <div className={"text-2xl font-serif my-2"}>
                        Conceptualize:
                    </div>

                    <div className="font-serif text-lg mb-6">
                        I used Notion to work through which content should stay, and which should go. My main strategy
                        was
                        to kill as many darlings as possible. I was convinced the problem was the sheer volume of
                        information, and I could restructure the design to make it visually appealing later on.
                    </div>
                    <ScratchBoard words={BASE_WORDS}/>
                    <div className={"mt-10 font-serif"}>As I slowly removed key sections of the site, section by
                        section, I
                        read
                        through them all again. And then it hit me...
                    </div>
                    <img src={"/images/skinenr.gif"}></img>
                    <div className={"text-2xl font-serif font-bold my-2"}>
                        I Was Wrong About The Problem.
                    </div>


                    {/*<h2 className="font-serif mb-2">Exploration</h2>*/}
                    {/*<ShuffleBoard words={BASE_WORDS}/>*/}


                    {/*<h2 className="font-serif mt-6 mb-2">Structure</h2>*/}
                    {/*<ColumnBoard/>*/}
                </section>
                <DividerComp></DividerComp>
                <section id={"problem2"} className={"mx-10 font-serif"}>
                    <div className={"text-2xl font-serif my-2"}>
                        The Problem, Part 2: Electic Boogaloo
                    </div>
                    <div>All this time, I was missing the point of ProfileTree.</div>
                    <div className={"my-2"}> ProfileTree's intention for the site was not as a place from which they
                        could
                        direct users to
                        their sales team - ProfileTree's aim was to equip user's with the information they needed to
                        make
                        the right decision.
                    </div>
                    <div>The more I read through the information, and looked at the other pages, the more I realized;
                        ProfileTree's intention was never to sell you something you didn't need. Their intention was to
                        answer any of your questions, to lead you to the right decision.
                    </div>
                    <div>Even if that decision was not to buy their services.</div>
                    <div> And that meant I had to go back to the drawing board.</div>
                    <div>Incredibly grateful that I had kept all of my Notion text-blocks, I started looking at the
                        content through a new lens, with a new goal.
                    </div>

                </section>
                <DividerComp></DividerComp>
                <section id={"conceptualize2"} className={"mx-10 font-serif"}>
                    <div className={"text-2xl font-serif my-2"}>
                        Conceptualize 2: This Time It's Personal
                    </div>
                    <div className={"flex flex-row bg-green-950 p-5 rounded-full"}>
                        <div className={"align-middle my-auto"}>{star}</div>
                        <div className={"font-handwritten align-middle my-auto mx-5 text-xl"}>New Plan:</div>
                        <div className={"my-auto text-xl w-1/2"}>Keep all the content; Convince the user there's a lot
                            less than
                            there
                            actually
                            is.
                        </div>
                    </div>
                    <div className={"mt-4"}>To do this, I set up some basic principles:
                    </div>
                    <ul className={"mx-10 mb-4"}>
                        <li> 1. Hide as much content as I can.</li>
                        <li>2. Avoid duplicating information.</li>
                        <li>3. Lots of visual tricks to make it seem like there's less text.</li>
                        <li>4. Control the user's flow through the information: what they know when.</li>
                        <li>5. Still back to basics: some information has to be cut, some information is hurting our
                            chances of a sale.
                        </li>
                    </ul>
                    <div className={"flex flex-row"}>
                        <div>
                            <img src={"/images/images.jpg"} className={"object-cover h-full"}/>
                        </div>
                        <div className={"w-1/2 mx-2"}>
                            <div>The design centered around information. So I started there.</div>
                            <div>I went back to all of the information, before I had gotten rid of any of it. And I
                                sorted the
                                information into various categories.
                            </div>

                            <ColumnBoard></ColumnBoard>
                        </div>
                    </div>

                    <div>From here, I organized the content and categories in order of importance. I tried to find
                        links between them as far as I could go.
                    </div>
                    <div>I restructured so much information that I went from hundreds of unrealted paragraphs to a few
                        chunks of related information.
                    </div>
                    <ShuffleBoard words={words}></ShuffleBoard>
                    <div>From there...the design could begin.</div>

                </section>
                <DividerComp></DividerComp>
                <section id={"wireframes"} className={"mx-10 font-serif"}>
                    <div className={"text-2xl font-serif my-2"}>
                        Wireframes & Mock-ups
                    </div>
                    <div>I designed a number of visually interesting and related components, that would make the page
                        feel less like an endless slog of text. I went out of my way to stack text side-by side, to give
                        the illusion of less information.
                    </div>
                    <div>The next step was just deciding where each chunk of information would go...</div>
                </section>
                <DividerComp></DividerComp>
                <section className={"mx-10"} id={"final-product"}>
                    <div className={"text-2xl font-serif my-5"}>Final Screens:</div>
                    <div className={"font-serif"}>Keep scrolling for a close-up look at the final screens.</div>
                </section>
                <div className={"mx-10 grid grid-cols-2 gap-2"}>
                    {images.map((image, index) => (
                        <img className={"object-cover"} key={index} src={image.image}></img>
                    ))}
                </div>
            </div>

            <DividerComp></DividerComp>
            <FooterComp></FooterComp>
        </main>
    );
}
