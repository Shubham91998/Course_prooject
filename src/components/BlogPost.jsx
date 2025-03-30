import React, { useState } from "react";

const BlogPost = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage article visibility

  const toggleArticle = () => {
    setIsExpanded(!isExpanded); // Toggle visibility
  };

  return (
  <>
    <div
      className="flex flex-col gap-3 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-60 py-5 px-3 cursor-pointer"
      onClick={toggleArticle} // Toggle article on click
    >
      {/* Image */}
      <img
        src={post.image}
        alt={post.title}
        className="object-cover w-full h-24"
      />

      {/* Title */}
      <h3 className="text-base font-semibold text-[#374050] text-opacity-[0.9] px-2">
        {post.title}
      </h3>

      {/* Date */}
      <span className="text-xs text-gray-500 px-2">{post.date}</span>

      {/* Article (Conditionally Rendered) */}
      {isExpanded && (
        <p className="text-sm text-gray-600 px-2 pb-2 line-clamp-3">
          {post.article}
        </p>
      )}
    </div>
    </>
  );
};

export default BlogPost;