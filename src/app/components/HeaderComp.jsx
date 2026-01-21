export default function HeaderComp({heading, subheading}) {
    return (
        <div className={""}>
            <h1 className={"font-handwritten -mb-6 text-3xl"}> {subheading} </h1>
            <h1 className={"font-serif text-9xl"}> {heading} </h1>
        </div>
    )
}