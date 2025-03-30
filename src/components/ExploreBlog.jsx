import React, { useEffect, useState } from "react";
import BlogPost from "../components/BlogPost"; // Ensure correct import

const ExploreBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/post.json"); // Ensure the path is correct
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();

        // Ensure it's an array before setting state
        if (!Array.isArray(data)) {
          throw new Error("Fetched data is not an array");
        }

        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <>
    <div>
        <h1 className="text-slate-400">LATEST POSTS</h1>
    </div>
    <div className="bg-white py-8 px-6 sm:px-16">
      <div className="flex flex-col items-center">
        

        {/* Check if blogs exist before mapping */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10">
            {blogs.map((blog) => (
              <BlogPost key={blog.id} post={blog} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No blogs available.</p>
        )}

       
      </div>
    </div>
    </>
  );
};

export default ExploreBlog;
