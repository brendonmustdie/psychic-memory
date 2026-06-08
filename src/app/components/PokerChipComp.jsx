export default function PokerChipComp({colour, text}) {
    return (
        <div
            className=" w-full aspect-square rounded-full drop-shadow-2xl border-dashed border-white flex items-center justify-center text-white text-md text-center"
            style={{backgroundColor: colour, borderWidth: '7px'}}
        >
            {text}
        </div>
    );
}
