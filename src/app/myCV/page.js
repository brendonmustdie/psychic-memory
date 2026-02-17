import ScreenLayoutComp from "../components/ScreenLayoutComp";
import HeaderComp from "../components/HeaderComp";
import GenericContentComp from "../components/GenericContentComp";
import Image from "next/image";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import NextProjectComp from "@/app/components/NextProjectComp";
import WarningLabelComp from "@/app/components/WarningLabelComp";
import Link from "next/link";
import XPComp from "@/app/components/XPComp";
import DividerComp from "@/app/components/DividerComp";
import XPCardComp from "@/app/components/XPCardComp";
import FooterComp from "@/app/components/FooterComp";

export default function Page() {

    const xpElements = [
        {
            title: "Front End Developer and Lead Designer",
            startDate: "July 2024-",
            endDate: "Present",
            company: "Intelligent Elephant Inc",
            description: "Followed guidelines from clients to lead the re-design process for a desktop-run project management application, resulting in a 22% increase\n" +
                "in user satisfaction by focusing on user-centered design and implementing user feedback. Conducted in-depth user research and usability\n" +
                "testing, identifying key issues and implementing solutions that improved user experience by 12%. Developed the front-end of the site using\n" +
                "HTML, CSS, and JavaScript, eventually building the site in React, enhancing design consistency and user engagement",
            skills: ["CSS", "HTML", "JavaScript"],
            icon:  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        className="bi bi-suit-club-fill" viewBox="0 0 16 16">
                <path
                    d="M11.5 12.5a3.5 3.5 0 0 1-2.684-1.254 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5"/>
            </svg>
        },
        {
            title: "Unity Generalist",
            startDate: "May 2024-",
            endDate: "July 2024",
            company: "Third Eye Games",
            description: "Collaborated with senior game designers to brainstorm and develop core game systems, enhancing creativity and innovation in design,\n" +
                "resulting in a 33% improvement in user experience. Conducted weekly user-testing, providing user-focused insights and recommendations,\n" +
                "optimizing overall user experience by 33%. Analyzed usability testing results and implemented design improvements, ensuring alignment\n" +
                "with project objectives and enhancing user satisfaction by 33%",
            skills: ["CSS", "HTML", "JavaScript"],
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dc2626"
                       className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                <path
                    d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2"/>
            </svg>
        },
        {
            title: "Lead Digital Media Manager",
            startDate: "January 2024- ",
            endDate: "July 2024",
            company: "Ubusure",
            description:
                "Led the design and development of the website, focusing on the user-journey and client specifications, resulting in a 14% increase in user\n" +
                "engagement. Developed the front-end of the site using HTML, CSS, and JavaScript, enhancing design consistency and user engagement.\n" +
                "Created wireframes, mock-ups, and interactive prototypes using Figma and Sketch, iterating designs based on user feedback and usability\n" +
                "testing, enhancing design consistency by 21%.",
            skills: ["CSS", "HTML", "JavaScript"],
            icon:  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        className="bi bi-suit-spade-fill" viewBox="0 0 16 16">
                <path
                    d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/>
            </svg>
        },
    ];

    return (
        <main className="min-h-screen">
            <div className={"flex flex-row"}>
                <HomeButtonComp></HomeButtonComp>
            </div>
            <div className={"m-10"}>
                <h1 className={"font-bold text-xl font-handwritten"}>Brendon Kruger</h1>
                <div className={"flex flex-row gap-2"}>
                    <Link href={"mailto:brendonkruger@proton.me"}>brendonkruger@proton.me</Link>
                    <p>|</p>
                    <p>Johannesburg, Gauteng, South Africa </p>
                </div>

                <div className={"flex flex-row gap-2 m-2"}>
                    <Link href="https://www.linkedin.com/in/brendon-kruger-a5a846232/">
                    <div className={"h-10 w-10 border border-white rounded-full content-center hover:bg-white"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-linkedin ml-2.5" viewBox="0 0 16 16">
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                    </div>
                </Link>
                    <Link href="/BrendonKruger_CV.pdf" download={"BrendonKruger_CV.pdf"}>
                        <div className={"h-10 w-10 border border-white rounded-full content-center hover:bg-white"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-download ml-2" viewBox="0 0 16 16">
                                <path
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                            </svg>
                        </div>
                    </Link>

                    <Link href="https://github.com/brendonmustdie">
                        <div className={"h-10 w-10 border border-white rounded-full content-center hover:bg-white"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-github ml-1.5" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className={"flex flex-row gap-2 my-4"}>
                    <p className={"bg-red-900 px-2 py-1 rounded-md"}>Notion</p>
                    <p className={"bg-red-900 px-2 py-1 rounded-md"}>Figma</p>
                    <p className={"bg-red-900 px-2 py-1 rounded-md"}>HTML</p>
                    <p className={"bg-red-900 px-2 py-1 rounded-md"}>CSS</p>
                    <p className={"bg-red-900 px-2 py-1 rounded-md"}>JavaScript</p>
                    <p className={"bg-red-900 px-2 py-1 rounded-md"}>React</p>
                    <p className={"bg-red-900 px-2 py-1 rounded-md"}>Next.js</p>
                    <p className={"bg-red-900 px-2 py-1 rounded-md"}>User Experience Design</p>
                    <p className={"bg-red-900 px-2 py-1 rounded-md"}>User Interface Design</p>
                </div>

                <h2 className={"font-serif text-2xl font-bold"}>About Me:</h2>
                <div className={"font-serif my-2"}>
                    <p>I love the user journey - and I love guiding user behaviour. </p>
                    <br/><p>
                        I have a keen interest in video game development so my private time is spent building procedurally
                        generated cities, physics based digital toys,
                        and pretty illustrations. </p> <br/>
                    <p>
                        I try my absolute best to work through HackerRank as often as I can - and I write blog posts monthly on
                        the design trends in the world around
                        me. What I like, what I don't, and what I hope to use in the future.</p>
                </div>
<DividerComp></DividerComp>

                <h3 className={"font-serif font-bold text-2xl"}>My Ideal Job:</h3>
                <div className={"font-serif my-2"}>
                    <p>I'd love to be the ui/ux designer that overhauls your sites and applications. My strengths lie in
                        designing and building beautiful, responsive front
                        ends. I'm comfortable in native HTML, React, and Next.js. I'm a big fan of Tailwind, and HeroUI, but I'm
                    also comfortable building components
                    from scratch.</p> <br/>
                <p>I'm all about giving back to the community - and I'd love to work in industries that care. I work best on
                    a small team or on my own. I like a clear
                    hierarchy, but a culture of learning and passion. Our differences make us a better team - and I'd like
                    our culture to support that.</p> <br/>
                <p>
                    I'm deeply interested in all things digital, and all things beautiful. That means I'd love to learn new
                    skills that help me build a front-end, beautiful
                    marketing materials, and even copywriting as a special little hobby.
                </p> <br/>
                <p>
                    I'm an avid learner with a passion for "manipulating" the user. I'm great at knowing - and studying -
                    how a user interacts with a product, and how
                    to guide them the way we want.
                </p>
                </div>
                <DividerComp></DividerComp>
                <h2 className={"font-serif text-2xl font-bold"}>Work Experience:</h2>
                <div>
                    {xpElements.map((xpElement) => (
                        <div key={xpElement.title} className={"my-2 font-serif"}>
                            <div className={"flex flex-row gap-2 "}>
                                <div>{xpElement.icon}</div>
                                <div><div><div className={"font-bold text-xl"}>{xpElement.title}</div>
                                    {xpElement.company}
                                    <div className={"flex flex-row text-gray-400"}> {xpElement.startDate} {xpElement.endDate}</div>

                                    {xpElement.description}
                                </div></div>
                            </div>
                            </div>
                    ))}
                </div>
                <DividerComp></DividerComp>
<div className={" font-serif"}>
                <h2 className={"text-2xl font-bold m-2"}>My Education:</h2>
    <div>
        <div className={"flex flex-row gap-2"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DC2626"
                 className="bi bi-suit-heart-fill ml-2" viewBox="0 0 16 16">
                <path
                    d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
            </svg>
            <p className={"font-bold text-xl"}>University of the Witwatersrand, Johannesburg</p>
        </div>

        <p className={"ml-10"}>Professional Bachelor of Arts (Honours Equivalent) in Digital Arts</p>
    </div>

</div>
                <DividerComp></DividerComp>
            </div>

<FooterComp></FooterComp>
        </main>
    );
}
