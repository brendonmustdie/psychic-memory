export default function HeaderComp({heading, subheading}) {
    return (
        <div className={""}>
            <h1 className={"font-handwritten md:-mb-6 text-lg"}> {subheading} </h1>
            <h1 className={"font-serif md:text-9xl text-3xl"}> {heading} </h1>
        </div>
    )
}