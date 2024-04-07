import { Link } from "react-router-dom"
import Avatar from "./Avatar"

const AppBar = ({ saved, page, type = "create" }: { saved?: boolean, page?: string, type: string }) => {
    return (
        <div className="flex flex-cols-2 justify-between bg-slate-100 h-14 ">
            <div id="AppBar" className="flex justify-center flex-col w-min">
                <div className="flex justify-start gap-x-2 ml-1">
                    <Avatar sizes="h-10 w-10" name="Neep"></Avatar>
                    <div className="flex flex-col justify-center font-semibold">
                        <Link to={"/blogs"}>
                            Blogify
                        </Link>
                    </div>

                    <div className="flex justify-center flex-col text-slate-400 pl-4">
                        {saved === true && page === "create" ? "saved" : null}
                    </div>
                </div>
            </div>
            <div className="flex justify-center flex-col w-min  pr-2">
                {type === "create" ? <div className="flex flex-col justify-center bg-green-600  w-16 h-6 rounded-xl ">
                    <div className="text-white text-center">Publish</div>
                </div>
                    : null}
            </div>
        </div>
    )
}
export default AppBar