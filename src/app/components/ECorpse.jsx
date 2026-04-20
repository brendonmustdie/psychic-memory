export default function ECorpseComp({imageArray, index}) {
    return (
        <div>
            {imageArray.map((item, i) => (
                <div key={i} className={index === i ? "flex" : "hidden"}>
                    <img src={item.image} alt=""/>
                </div>
            ))}
        </div>
    );
}