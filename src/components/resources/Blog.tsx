import Post, { PostProps } from "../shared/Post";
// Store
import { useEffect, useState } from "react";
import { blogPosts } from "@/store/blog";

const Blog = () => {
  const [latestPosts, setLatestPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@heidi_49358"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setLatestPosts(blogPosts.concat(data.items.slice(0, 5)));
        }
      })
      .catch((err) => console.error("Error fetching Medium articles:", err));
  }, []);

  return (
    <section className="p-10 lg:p-15 flex flex-col items-center">
      <h2 className="text-4xl/14 lg:text-6xl/18 font-bold mb-10">
        Featured articles
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
        {latestPosts.map((post, index) => (
          <div key={index} className="col-span-1">
            <Post {...post} />
          </div>
        ))}
      </div>
      <a
        href="https://medium.com/@heidi_49358"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center px-5 py-2 rounded-lg gap-2 w-full text-light-teal hover:bg-gray hover:text-teal transition-all mt-10 text-lg font-bold border-2 border-light-teal"
      >
        View All Articles
      </a>
    </section>
  );
};

export default Blog;
