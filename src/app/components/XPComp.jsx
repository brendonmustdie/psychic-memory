"use client";

import XPCardComp from "@/app/components/XPCardComp";

export default function XPComp() {
    const xpElements = [
        {
            title: "Hello World",
            startDate: "start",
            endDate: "end",
            company: "Company",
            description: "Description",
            skills: ["CSS", "HTML", "JavaScript"],
        },
        {
            title: "Hello World 2",
            startDate: "start",
            endDate: "end",
            company: "Company",
            description: "Description",
            skills: ["CSS", "HTML", "JavaScript"],
        },
    ];

    return (
        <div>
            {xpElements.map((xpElement) => (
                <div key={xpElement.title}>
                    <XPCardComp title={xpElement.title} startDate={xpElement.startDate} endDate={xpElement.endDate} compant={xpElement.company} description={xpElement.description} skills={xpElement.skills} />
                </div>
            ))}
        </div>
    );
}
