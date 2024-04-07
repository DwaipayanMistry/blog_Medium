import { useParams } from "react-router-dom"
import AppBar from "../components/AppBar"
import { useBlog } from "../hooks"
import Avatar from "../components/Avatar"

export function Blog() {
    const { id } = useParams()
    const { loading, blog } = useBlog({
        id: id || ""
    })
    if (loading) {
        return <>
            <AppBar type="blog" ></AppBar>
            <div>Loading...</div>
        </>
    }
    if (blog) {
        return <div >
            <AppBar type="blog" ></AppBar>
            <div className="  grid   pt-20 mx-24 gap-x-16 md:mx-42 lg:mx-60 xl:mx-80 grid-cols-3">
                <div id="blog" className="min-w-36  col-span-3 xl:col-span-2">
                    <div className="font-extrabold text-4xl">{blog.title}</div>
                    <div className="text-sm font-semibold text-slate-400">
                        Posted on 24-Agu-2024
                    </div>
                    <div className="text-slate-600 font-semibold">
                        {blog.content}
                    </div>
                </div>
                <div className="hidden xl:block">
                    <div id="Author" className=" flex justify-end ">
                        <div>
                            <div className="text-slate-500">
                                Author
                            </div>
                            <div className="flex  gap-2 mt-3">
                                <Avatar name={blog.author.name} sizes={"w-7 h-7"}></Avatar>
                                <div className="font-bold text-xl">
                                    {blog.author.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }

}
