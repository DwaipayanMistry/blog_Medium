import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"

const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {

        return <>
            <AppBar page="create" saved={true}></AppBar>
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
            <AppBar page="create" saved={true}></AppBar>
            <div className="flex justify-center mt-8">
                <div className="  w-7/12">
                     {blogs.map(posts => <BlogCard
                        id={posts.id} title={posts.title}
                        authorName={posts.author.name || "Anonymous"}
                        content={posts.content}
                        publishedDate={"2-Feb-2024"}>
                    </BlogCard>)}
                    {/* <BlogCard authorName="Deepxxx-1" publishedDate="12-Jan-2024" title="Lorem Ipsum-1" 
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker including versions of Lorem Ipsum.">
                    </BlogCard>
                    <BlogCard authorName="Deepxxx-2" publishedDate="12-Jan-2024" title="Lorem Ipsum-2" 
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker including versions of Lorem Ipsum.">
                    </BlogCard>
                    <BlogCard authorName="Deepxxx-3" publishedDate="12-Jan-2024" title="Lorem Ipsum-3" 
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker including versions of Lorem Ipsum.">
                    </BlogCard>
                    <BlogCard authorName="Deepxxx-4" publishedDate="12-Jan-2024" title="Lorem Ipsum-4" 
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker including versions of Lorem Ipsum.">
                    </BlogCard> */}
                </div>
            </div>
        </div>

    )
}
export default Blogs