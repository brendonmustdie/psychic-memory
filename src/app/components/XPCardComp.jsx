"use client";

export default function XPCardComp({
                                       title,
                                       description,
                                       skills,
                                       company,
                                       startDate,
                                       endDate,
                                   }) {
    return (
        <div className="rounded-lg m-2 grid-cols-2 gap-4">
            <div>{title}</div>
            <div>{description}</div>
            <div>{startDate}</div>
            <div>{endDate}</div>
            <div>{skills}</div>
            <div>{company}</div>
        </div>
    );
}
