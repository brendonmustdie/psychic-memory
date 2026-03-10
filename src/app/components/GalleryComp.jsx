export default function GalleryComp({images}) {
    return (
        <div className={"m-2 grid-cols-3 grid gap-2"}>
            {images.map((imageObject, index) => (
                <img key={index} src={imageObject.image}></img>
            ))}
        </div>
    )
}