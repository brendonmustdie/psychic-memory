"use client";

export default function XPCardComp({
                                       title,
                                       description,
                                       skills,
                                       company,
                                       startDate,
                                       endDate,
    icon
                                   }) {
    return (
        <div className="rounded bg-white p-4 m-2 text-black">
            <div className={"flex flex-row gap-2"}>
                <div className={"m-2"}>
                    {icon}
                   </div>

                <div><div className={"font-bold text-xl"}>{title}</div>
                    <div className={"font-bold"}>{company}</div></div></div>
            <div className={"flex flex-row text-gray-400"}>

                <div className={"italic"}>{startDate}</div>
                <div className={"italic"}>{endDate}</div>
            </div>
            <div>{description}</div>
            <div>{skills}</div>
        </div>
    );
}
