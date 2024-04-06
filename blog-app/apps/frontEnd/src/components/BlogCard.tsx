import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
    id?: string;
    authorName?: string;
    title: string;
    content: string;
    publishedDate: string

}

const BlogCard = ({ id, authorName, title, content, publishedDate }: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className=" border-b-2 w-full">
                <div className="flex justify-start gap-x-2 ml-1" >
                    {/* avatar */}
                    <Avatar sizes="h-6 w-6" name="Dwa"></Avatar>
                    {/* Personal info */}
                    <div className="flex self-center ">
                        <span className="align-middle  font-semibold">{authorName}</span>
                        {/* <span className=" text-slate-500"> .</span> */}
                        <Dot></Dot>
                        <span className="align-middle font-thin text-slate-300">{publishedDate}</span>
                    </div>

                </div>
                {/* Blog input */}
                <div className="pt-2">
                    <div className="font-bold text-2xl">{title}</div>
                    <div className="text-slate-400 text-base font-thin">{content.length > 100 ? content.slice(100) + "..." : content}</div>
                    <div><Read></Read></div>
                </div>

            </div>
        </Link>


    )
    function Dot() {
        return (
            <div className="flex flex-col justify-center p-2">
                <div className="h-0.5 w-0.5 bg-slate-300 rounded-full"></div>
            </div>
        )
    }
    function Read() {
        const readTime: number = Math.ceil(content.length / 500)
        const min = readTime > 1 ? "minuets" : "minuit"
        return (
            <div className=" text-slate-400 font-light">{`${readTime} ${min}`}</div>
        )
    }
}

export default BlogCard