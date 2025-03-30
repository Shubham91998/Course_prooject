
import React, { useState } from 'react';

// Blog Post Card Component
const BlogPostCard = ({ 
  title, 
  category, 
  readTime, 
  author, 
  date, 
  excerpt, 
  tags, 
  likes, 
  dislikes, 
  comments 
}) => {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 transition-all">
      <div className="p-4 md:p-6">
        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm text-gray-600 mb-3">
          <span className="px-2.5 py-0.5 bg-gray-100 rounded-full text-gray-700 font-medium">
            {category}
          </span>
          <span className="text-sm">{readTime}</span>
        </div>
        
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
          {title}
        </h2>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-4 h-4 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
          </div>
          <div>
            <span className="font-medium text-gray-900">{author}</span>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-3 h-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
              </svg>
              <span>{date}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm md:text-base">{excerpt}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs md:text-sm rounded-md">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-3 h-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"></path>
              </svg>
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-4 border-t border-gray-100">
          <button className="flex items-center gap-1 text-gray-600 hover:text-green-600">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path>
            </svg>
            <span className="text-sm">{likes}</span>
          </button>
          
          <button className="flex items-center gap-1 text-gray-600 hover:text-red-600">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z"></path>
            </svg>
            <span className="text-sm">{dislikes}</span>
          </button>
          
          <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
            </svg>
            <span className="text-sm">{comments} Comments</span>
          </button>
        </div>
      </div>
    </article>
  );
};

// Filter Modal Component
const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity">
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl p-6 transform transition-transform">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Filter Posts</h3>
          <button className="p-2" onClick={onClose}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <button className="text-left py-2 px-4 hover:bg-gray-100 rounded-md">Latest</button>
            <button className="text-left py-2 px-4 hover:bg-gray-100 rounded-md">Popular</button>
            <button className="text-left py-2 px-4 hover:bg-gray-100 rounded-md">Trending</button>
          </div>
          <div>
            <select className="w-full px-4 py-2 border rounded-md">
              <option>All Categories</option>
              <option>Tutorials</option>
              <option>Guides</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Blog Page Component
const BlogPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      category: "Tutorial",
      readTime: "5 min read",
      author: "Sarah Developer",
      date: "2024-11-03",
      excerpt: "React Hooks have revolutionized how we write components. In this post, we'll explore the basics of useState and useEffect...",
      tags: ["React", "JavaScript", "Frontend"],
      likes: 42,
      dislikes: 3,
      comments: 2
    },
    {
      id: 2,
      title: "Python for Data Science: A Beginner's Guide",
      category: "Guide",
      readTime: "8 min read",
      author: "Mike Analytics",
      date: "2024-11-02",
      excerpt: "Python has become the go-to language for data science. Let's explore the essential libraries and concepts...",
      tags: ["Python", "Data Science", "ML"],
      likes: 35,
      dislikes: 2,
      comments: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 md:py-16 mt-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Code Skill Blog</h1>
          <p className="text-gray-300 text-base md:text-lg">Insights, tutorials, and updates from our community</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        {/* Filter Controls */}
        <div className="mb-8 flex items-center justify-between pb-4 border-b border-gray-200">
          <div className="hidden md:flex gap-4">
            <button className="text-gray-600 hover:text-gray-900">Latest</button>
            <button className="text-gray-600 hover:text-gray-900">Popular</button>
            <button className="text-gray-600 hover:text-gray-900">Trending</button>
          </div>
          <div className="hidden md:flex gap-2">
            <select className="px-3 py-1 border rounded-md text-sm bg-white">
              <option>All Categories</option>
              <option>Tutorials</option>
              <option>Guides</option>
            </select>
          </div>
          <button 
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border rounded-md text-sm"
            onClick={() => setIsFilterOpen(true)}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path>
            </svg>
            Filter
          </button>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6 md:space-y-8">
          {blogPosts.map(post => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <FilterModal 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
      />
    </div>
  );
};

export default BlogPage;