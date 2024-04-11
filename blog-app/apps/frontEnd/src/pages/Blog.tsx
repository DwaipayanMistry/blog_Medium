import { useParams } from "react-router-dom"
import AppBar from "../components/AppBar"
import { useBlog } from "../hooks"
import Avatar from "../components/Avatar"
import { BlogSkeleton, } from "../components/Skeleton"

export function Blog() {
    const { id } = useParams()
    const { loading, blog } = useBlog({
        id: id || ""
    })
    if (loading) {
        return <>
            <AppBar name="Dedxd" type="blog" ></AppBar>
            <div className="flex justify-center w-screen">
                <div className="flex flex-col pt-20 h-screen w-2/3">
                    <BlogSkeleton />
                </div>
            </div>

        </>
    }
    if (blog) {
        return <div >
            <AppBar name="Dedxd" type="blog" ></AppBar>
            <div className="  grid   pt-20 mx-24 gap-x-16 md:mx-42 lg:mx-50 xl:mx-55 grid-cols-4">
                <div id="blog" className="min-w-36  col-span-4 lg:col-span-3">
                    <div className="font-extrabold text-5xl mb-3">{blog.title}</div>
                    <div className="text-sm font-semibold text-slate-400">
                        Posted on 24-Agu-2024
                    </div>
                    <div className="text-slate-600 font-semibold break-words">
                        {blog.content}
                    </div>
                </div>
                <div className="hidden lg:block">
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
