export default function HeaderComp({heading, subheading}) {
    return (
        <div className={""}>
            <h1 className={"font-handwritten -mb-6"}> {subheading} </h1>
            <h1 className={"font-serif"}> {heading} </h1>
        </div>
    )
}