"use client"


type QuoteProps = {
    quote: string;
    attribution: string;
}

export default function Quote(props : QuoteProps) {
    return (
        <div className="w-full h-full flex flex-col gap-2 justify-center items-center p-30">
            <h1 className="text-black text-8xl text-center">"{props.quote}"</h1>
            <h4 className="text-black text-xl text-end">-{props.attribution}</h4>
        </div>
    )
};