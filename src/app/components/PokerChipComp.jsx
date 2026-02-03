export default function PokerChipComp({ colour, text }) {
    return (
        <div
            className=" h-28 w-28 rounded-full drop-shadow-2xl border-dashed border-white flex items-center justify-center text-white text-md text-center"
            style={{ backgroundColor: colour, borderWidth: '12px' }}
        >
            {text}
        </div>
    );
}
