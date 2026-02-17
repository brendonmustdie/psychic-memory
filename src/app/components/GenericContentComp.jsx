import Link from "next/link";

export default function GenericContentComp({ heading, content, buttons}) {
    return (
        <div className="lg:mr-64">
            <h2 className="md:text-3xl text-lg mb-2 font-handwritten">{heading}</h2>
            <div className="font-serif">
                {typeof content === "string" ? <p>{content}</p> : content}
            </div>

                {buttons}

        </div>
    );
}
