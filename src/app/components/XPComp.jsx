"use client";

import XPCardComp from "@/app/components/XPCardComp";

export default function XPComp() {
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
        <div>
            {xpElements.map((xpElement) => (
                <div key={xpElement.title}>
                    <XPCardComp icon={xpElement.icon} title={xpElement.title} startDate={xpElement.startDate}
                                endDate={xpElement.endDate} company={xpElement.company}
                                description={xpElement.description} skills={xpElement.skills}/>
                </div>
            ))}
        </div>
    );
}
