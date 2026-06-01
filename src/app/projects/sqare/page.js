'use client'
import ScreenLayoutComp from "../../components/ScreenLayoutComp";
import HeaderComp from "../../components/HeaderComp";
import GenericContentComp from "../../components/GenericContentComp";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import FooterComp from "@/app/components/FooterComp";
import {useState} from "react";
import DividerComp from "@/app/components/DividerComp";
import {useEffect} from "react";
import Link from "next/link";
import AutoCarousel from "@/app/components/AutoCarousel";


export default function Page() {

    const [openMenu, setOpenMenu] = useState(false);
    const [openView, setOpenView] = useState(false);
    const [selectView, setSelectView] = useState(false);

    const [selectTab, setSelectTab] = useState(false);


    useEffect(() => {
        if (!openMenu) {
            setOpenView(false);
            setSelectView(false);
        }
    }, [openMenu]);

    const images = [
        "/images/SQARE/ProjectAnalysis_final.png",
        "/images/SQARE/ProjectUpload-Final.png",
        "/images/SQARE/Select_A_Project.png",
        "/images/SQARE/SQARE_bim_live.png",
        "/images/SQARE/SQARE_dash_live.png",
        "/images/SQARE/SQARE_ProgressReport.png",
        "/images/SQARE/SQARE_settings_live.png",
    ];

    return (
        <main className="min-h-screen">
            <div className={"flex flex-row"}>
                <HomeButtonComp></HomeButtonComp>
            </div>
            <ScreenLayoutComp
                leftComponent={
                    <HeaderComp
                        heading="SQARE"
                        subheading="Redesign:"
                    />
                }
                rightComponent={
                    <>
                        <GenericContentComp
                            heading="The Project"
                            content={
                                <>
                                    <p className={"my-5"}>


                                        SQARE is a web-based application that I collaborated on while working at
                                        Intelligent
                                        Elephant. It had been in progress for a year before I joined the team, and had
                                        been
                                        designed by a collection of software engineers. </p>
                                    <p>
                                        SQARE is a project-management software designed specifically for construction
                                        projects. It's selling feature is risk-assessment and schedule-qulity checking.
                                        The
                                        CEO of Intelligent Elephant - Warren Eales - had a very specific vision in mind.
                                    </p>
                                    <p>
                                    </p>
                                </>
                            }

                        />
                        <div className={"h-5"}></div>

                        <GenericContentComp heading={"My role"}
                                            content={
                                                <>
                                                    <p className={"my-5"}>

                                                        I took lead of the re-design process under the direction of the
                                                        project
                                                        manager, Christopher Walley, to rework the user-experience and
                                                        user-interface for the client they had in mind: Anglo-America.
                                                    </p>
                                                    <p>


                                                        I reworked the exisiting project from the ground up - I was the
                                                        first
                                                        designer on the project, so I had a clean slate. I took a
                                                        rigorous approach
                                                        to redefine the user journey based on research and studying the
                                                        user base to
                                                        find a deeper understanding of our users.
                                                    </p>
                                                    <div className={"flex flex-row"}>
                                                        <p className={"py-1"}>Keep scrolling to take a look at the
                                                            process or </p>
                                                        <Link href={"#final-product"}
                                                              className={"bg-blue-900 border-2 border-black hover:border-green-950 px-2 py-1 rounded-full"}> skip
                                                            to
                                                            the
                                                            final product.</Link>

                                                    </div>

                                                </>
                                            }>
                        </GenericContentComp>
                    </>
                }

            />
            <div className={"bg-blue-950 font-serif p-4"}>
                <div className={"mx-10"}>
                    <div className={"font-bold text-2xl my-2"}>Table of Contents</div>
                    <div className={"mx-10 my-2 text-xl"}>
                        <ul>
                            <li className={"my-2"}><Link className={"hover:text-blue-300"} href={"#research"}>
                                Research: Identifying the Problem
                            </Link></li>
                            <li className={"my-2"}><Link className={"hover:text-blue-300"} href={"#problem"}>The (Main)
                                Problem.</Link></li>
                            <li className={"my-2"}><Link className={"hover:text-blue-300"}
                                                         href={"#conceptualize"}>Conceptualize</Link></li>
                            <li className={"my-2"}><Link className={"hover:text-blue-300"} href={"#wireframes"}>Wireframes
                                & Mock-ups</Link></li>
                            <li className={"my-2"}><Link className={"hover:text-blue-300"} href={"#final-product"}> The
                                Final Product</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"mx-10 my-5 font-serif"}>
                <section id={"research"}>
                    <div className={"font-handwritten"}>and so it begins...</div>
                    <div className={"text-2xl font-serif"}>Research: Identifying the Problem.</div>
                    <div className={"bg-blue-900 rounded-r-full my-5 p-4  -ml-10"}>
                        <div className={"font-handwritten my-1 underline underline-offset-4"}>Primary Research</div>
                        <ul className={"font-serif"}>
                            <li className={"m-1"}> I attempted to use the application myself without guidance from the
                                software engineers
                                that built the programme.
                            </li>
                            <li className={"m-1"}>To account for my own biases, I conducted user-testing by asking
                                colleagues
                                with the relevant know-how of the targeted userbase to use the application without
                                guidance
                                while
                                narrating their actions and questions.
                            </li>
                        </ul>
                    </div>
                    <div className={"bg-blue-900 rounded-l-full my-5 p-4  text-right -mr-10"}>
                        <div className={"font-handwritten my-1 underline underline-offset-4"}>Competitive Analysis:
                        </div>
                        <ul className={"font-serif"}>
                            <li className={"m-1"}> I worked my way through the programme
                                construction sites used before, to track their projects - primavera p6.
                                e.
                            </li>
                        </ul>
                    </div>
                </section>
                <section id={"problem"}>
                    <div className={"text-2xl font-serif"}>The (Main) Problem.</div>
                    <div>The most pressing issue the application faced was that user's were immediately put off by the
                        application because of it's unfamiliar layout and lack of conventional design. I had to fix this
                        immediately.
                    </div>

                    <div className={"grid grid-cols-3 my-5"}>
                        <div>Symptoms</div>
                        <div>Illness</div>
                        <div>Cure</div>
                    </div>
                    <div className={"grid grid-cols-3 gap-2"}>
                        <div>
                            <div className={"bg-blue-950 p-4 rounded-lg my-1"}> Users get lost in the application.</div>
                        </div>
                        <div>
                            <div className={"bg-blue-950 p-4 rounded-lg my-1"}> Onboarding fails to teach users what
                                SQARE
                                does
                                or how to use it.
                            </div>
                            <div className={"bg-blue-950 p-4 rounded-lg my-1"}>Too much jargon, too much copy, and
                                unintuitive
                                instructions for use.
                            </div>
                        </div>
                        <div>
                            <div className={"bg-blue-950 p-4 my-1 rounded-lg"}> Drop the jargon and instructions
                                entirely.
                                Replace them
                                with dynamic headings, buttons,
                                and
                                visible subpages.
                            </div>
                        </div>
                    </div>
                    <div className={"grid grid-cols-3 gap-2"}>
                        <div>
                            <div className={"bg-blue-900 p-4 rounded-lg my-1"}> Users cannot do basic tasks without
                                several
                                attempts at pressing various buttons.
                            </div>
                        </div>
                        <div>
                            <div className={"bg-blue-900 p-4 rounded-lg my-1"}> The application layout is foreign and
                                unfamiliar.
                            </div>
                        </div>
                        <div>
                            <div className={"bg-blue-900 p-4 my-1 rounded-lg"}> Follow design convention to create
                                comfort
                                and easy of use.
                            </div>

                            <div className={"bg-blue-900 p-4 rounded-lg my-1"}>
                                Prioritize consistency across pages, so that user's recognize familiar concepts.
                            </div>
                        </div>
                    </div>
                    <div className={"grid grid-cols-3 gap-2"}>
                        <div>
                        </div>
                        <div>
                            <div className={"bg-blue-900 p-4 rounded-lg my-1"}> the icons are not descriptive or
                                intuitive.
                            </div>
                        </div>
                        <div>
                            <div className={"bg-blue-900 p-4 rounded-lg my-1"}>
                                Use conventional buttons and icons in places where user's might expect them. (i.e. the
                                exit
                                button is a cross in the top right corner - because that is where a user would look for
                                it.)
                            </div>
                        </div>
                    </div>
                    <div className={"grid grid-cols-3 gap-2"}>
                        <div>
                        </div>
                        <div>
                            <div className={"bg-blue-900 p-4 rounded-lg my-1"}> and there is not enough feedback for
                                them
                                to know what to do next.
                            </div>
                        </div>
                        <div>
                            <div className={"bg-blue-900 p-4 rounded-lg my-1"}>Change colours and button size on hover
                                so
                                that users know instantly that they can take an action with this button
                            </div>
                        </div>
                    </div>
                </section>

                <DividerComp></DividerComp>
                <section id={"conceptualize"}>

                    <div className={"text-2xl font-serif my-5"}>Conceptualize:</div>
                    <div> I started with some low-fidelity wireframes. Over time the scope of the project grew and
                        changed,
                        and my initial wireframes don't represent these changes. But as a guideline for my wireframes I
                        established a few 'rules' to help me fix the identified problems.
                    </div>
                    <ul className={"mx-10 my-2"}>
                        <li> 1. No instructions, no tutorial. All intuitive. Anything that needs to be explained is
                            badly
                            designed.
                        </li>
                        <li> 2. Do not reinvent the wheel. Use concepts the user is likely to be familiar with
                            already.
                        </li>
                        <li> 3. Consistency: the same icons, the same wording, and the same or similar layouts as far as
                            possible.
                        </li>
                        <li> 5. Make it as easy as humanly possible to see where to go and what to do.</li>
                    </ul>
                    <div>A vast majority of these concepts are the core of a game design principle - players will always
                        skip text.
                    </div>
                    <div>

                        The first part I wanted to tackle was navigation. The original design relied on "tabs" of a
                        browser
                        for their main design, users were meant to be able to open and close these tabs, as well as swap
                        between them. I wanted there to be less effort on the part of users to get to pages they needed
                        to
                        reach.
                    </div>

                    <div className={"mx-10 my-5"}>Play through this mock-up to get a feel for the proposed ux change
                    </div>
                    <div className={"mx-10 md:grid md:grid-cols-2 md:gap-4"}>
                        <div className={"flex flex-col h-50"}>
                            <div className={"font-handwritten text-lg m-2"}> Old Design</div>
                            <button onClick={() => setOpenMenu(!openMenu)}
                                    className={"bg-blue-950 p-2 rounded-lg border-2 border-black hover:border-blue-950"}> Menu
                            </button>
                            {openMenu ?
                                <button onClick={() => setSelectView(!selectView)}
                                        className={"bg-blue-900 p-2 rounded-lg border-2 border-black hover:border-blue-900"}>
                                    Choose a view </button> : <div></div>}
                            {selectView && openMenu ?
                                <button onClick={() => setOpenView(!openView)}
                                        className={"bg-blue-800 p-2 rounded-lg border-2 border-black hover:border-blue-800"}>
                                    Click on tab </button> : null}
                            {selectView && openMenu && openView ?

                                <div className={"text-center"}> SUCCESS! </div> : null}
                        </div>
                        <div className={"flex flex-col h-50"}>
                            <div className={"font-handwritten text-lg m-2"}> New Design</div>
                            <button onClick={() => setSelectTab(!selectTab)}
                                    className={"bg-blue-950 p-2 rounded-lg border-2 border-black hover:border-green-950"}>
                                Click on tab.
                            </button>
                            {selectTab ?
                                <div className={"text-center"}> SUCCESS! </div> : null}
                        </div>
                    </div>
                </section>
                <DividerComp></DividerComp>
                <section id={"wireframes"}></section>
                <div className={"text-2xl font-serif my-5"}>Wireframes & Mock-ups:</div>


                <div className={"md:grid md:grid-cols-2 gap-2"}>
                    <div className={"md:h-100"}>
                        <div className={"text-xl my-2"}> Low-fidelity Wireframes:</div>
                        The benefit of low-fidelity wire-frames is the ability to make designs and
                        see the problems
                        with
                        them early, without hours of work. My low-fidelity wireframes were drawn in Krita, using my
                        drawing
                        tablet.

                        <img className={"h-50 md:my-4 my-1"} src={"/images/SQARE/low-fidelity-project-selection.png"}/>
                    </div>
                    <div className={""}>
                        <img className={"h-50"} src={"/images/SQARE/low-fidelity-project-analysis.png"}></img>
                        <img className={"h-50 my-1"} src={"/images/SQARE/low-fidelity-project-documents.png"}/>
                    </div>
                </div>


                <div className={"text-xl"}> High-fidelity Wireframes:</div>
                <div> This is another step in the process where spotting design flaws is easy. At this point, the
                    development team can take a look at the designs and let me know what they think - as well as
                    discussions around what's viable. Unfortunately, with the tight deadline for this project I was
                    forced to forego this step.
                </div>

                <div className={"text-xl mt-10"}> Final Mock-Ups and Prototype:</div>
                <div> The final mock-ups and prototypes are built out in figma, for the purpose of user testing.
                </div>
                <AutoCarousel images={images}></AutoCarousel>

            </div>
            <DividerComp></DividerComp>
            <section className={"mx-10"} id={"final-product"}>
                <div className={"text-2xl font-serif my-5"}>Final Screens:</div>
                <div className={"font-serif"}>Keep scrolling for a close-up look at the final screens.</div>
            </section>
            <div className={"mx-10 grid md:grid-cols-2 gap-2"}>
                {images.map((image, index) => (
                    <img className={"object-cover my-1"} key={index} src={image}></img>
                ))}
            </div>
            <DividerComp></DividerComp>
            <FooterComp></FooterComp>
        </main>
    );
}
