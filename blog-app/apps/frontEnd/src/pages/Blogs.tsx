import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import { BlogsSkeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks"

const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {

        return <>
            <AppBar name="Dedxd" type="blogs" saved={true}></AppBar>
            <div className="flex justify-center ">
                <div className="flex flex-col justify-center ">
                    <BlogsSkeleton></BlogsSkeleton>
                    <BlogsSkeleton></BlogsSkeleton>
                    <BlogsSkeleton></BlogsSkeleton>
                    <BlogsSkeleton></BlogsSkeleton>
                    <BlogsSkeleton></BlogsSkeleton>
                </div>
            </div>
        </>
    }

    return (
        <div>
            <AppBar name="Dedxd" type="blogs" saved={false}></AppBar>
            <div className="flex justify-center mt-8">
                <div className="  w-7/12">
                    {blogs.map(posts => <BlogCard key={posts.id}
                        id={posts.id} title={posts.title}
                        authorName={posts.author.name || "Anonymous"}
                        content={posts.content}
                        publishedDate={"2-Feb-2024"}>
                    </BlogCard>)}
                </div>
            </div>
        </div>

    )
}
export default Blogs