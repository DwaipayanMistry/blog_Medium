import Avatar from "./Avatar"

const AppBar = ({ saved, page }: { saved?: boolean, page:string }) => {
    return (
        <div className="flex flex-cols-2 justify-between bg-slate-100 h-14 ">
            <div id="AppBar" className="flex justify-center flex-col w-min">
                <div className="flex justify-start gap-x-2 ml-1">
                    <Avatar sizes="h-10 w-10" name="Neep"></Avatar>
                    <div className="flex flex-col justify-center font-semibold">
                        Blogify
                    </div>
                    <div className="flex justify-center flex-col text-slate-400 pl-4">
                        {saved === true && page=== "create"? "saved" : null}
                    </div>
                </div>
            </div>
            <div className="flex justify-center flex-col w-min  pr-2">
                <div className="flex flex-col justify-center bg-green-600  w-16 h-6 rounded-xl ">
                    <div className="text-white text-center">Publish</div>

                </div>
            </div>
        </div>
    )
}
export default AppBar