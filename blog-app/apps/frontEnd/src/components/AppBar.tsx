import { Link, useNavigate } from "react-router-dom"
import Avatar from "./Avatar"

const AppBar = ({ saved, type = "create", name }: { saved?: boolean, type: string, name: string }) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-cols-2 justify-between bg-slate-100 h-14 ">
            <div id="AppBar" className="flex justify-center flex-col w-min">
                <div className="flex justify-start gap-x-2 ml-1">
                    <Avatar sizes="h-10 w-10" name={name}></Avatar>
                    <div className="flex flex-col justify-center font-semibold">
                        <Link to={"/blogs"}>
                            Blogify
                        </Link>
                    </div>
                    {type === "blogs" ?
                        <div className="flex flex-col justify-center ml-1">
                            <Link to={"/create"}>
                                <div className="flex flex-col justify-center bg-green-600 w-24 h-8 rounded-xl hover:bg-green-700 ">
                                    <div className="text-white text-center">
                                        Create Blog
                                    </div>
                                </div>
                            </Link>
                        </div>
                        : null}
                    {saved === true && type === "create" ? <div className="flex justify-center flex-col text-slate-400 pl-4"> saved</div> : null}
                </div>

            </div>
            <div className="flex justify-center flex-col w-min  pr-2">
                <div className="flex justify-center gap-3">
                    {/* {type === "create" ? <div className="flex flex-col justify-center bg-green-600  w-24 h-8 rounded-xl ">
                    <div className="text-white text-center">Publish</div>
                </div>
                    : null} */}

                    <button className=" bg-red-500 text-white text-center w-10 h-8 rounded-xl   hover:bg-red-700" onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/signin")
                    }}>
                        <div className="flex justify-center">{Power()}</div>
                    </button>
                </div>

            </div>
        </div>
    )
    function Power() {
        return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
        </svg>)
    }
}
export default AppBar