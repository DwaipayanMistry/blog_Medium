import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"

const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {

        return <>
            <AppBar type="blogs" page="create" saved={true}></AppBar>
            <div>Loading...</div>
        </>
    }

    return (
        <div>
            {/* <AppBar page="create" saved={true}></AppBar>
            <div className="flex justify-center mt-8">
                <div className="">
                    {blogs.map(posts => <BlogCard
                        id={posts.id} title={posts.title}
                        authorName={posts.author.name || "Anonymous"}
                        content={posts.content}
                        publishedDate={"2-Feb-2024"}>
                    </BlogCard>)}
                </div>
            </div> */}
            <AppBar type="blogs" page="create" saved={true}></AppBar>
            <div className="flex justify-center mt-8">
                <div className="  w-7/12">
                    {blogs.map(posts => <BlogCard
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