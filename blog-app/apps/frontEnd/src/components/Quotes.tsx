interface Quotes {
    quote: string,
    authorName: string,
    position?: string
}
const Quotes = ({ quote, authorName, position }: Quotes) => {
    return (
        <div className="flex flex-col  justify-center  bg-slate-200 h-screen">
            <div className="flex justify-center">
                <div className="max-w-lg">
                    <div className="text-left justify-center text-xl font-bold">"{quote}"</div>
                    <div className="font-semibold">{authorName}</div>
                    <div className=" text-xs font-300">{position}</div>
                </div>

            </div>
        </div>
    )
}
export default Quotes