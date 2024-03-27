import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";
import useBlogs from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="2nd Feb 24"
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
