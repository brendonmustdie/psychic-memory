export default function GenericContentComp({ heading, content }) {
    return (
        <div className="mr-64">
            <h2 className="text-3xl mb-2 font-handwritten">{heading}</h2>
            <div className="font-serif">
                {typeof content === "string" ? <p>{content}</p> : content}
            </div>
        </div>
    );
}
