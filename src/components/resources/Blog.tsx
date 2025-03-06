import Post from "../shared/Post";
// Store
import blog from "../../store/blog";

const Blog = () => {
  return (
    <section className="p-10 lg:p-15 flex flex-col items-center">
      <h2 className="text-4xl/14 lg:text-6xl/18 font-bold mb-10">
        Featured articles
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
        {blog.map((post) => (
          <div key={post.id} className="col-span-1">
            <Post
              title={post.title}
              description={post.description}
              image={post.image}
              link={post.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
