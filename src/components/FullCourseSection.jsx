import React, { useState, useEffect } from 'react';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch data from list.json
  useEffect(() => {
    fetch('/list.json')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setFilteredCourses(data); // Initialize filtered courses with all data
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Filter courses based on search query and category
  useEffect(() => {
    let filtered = courses;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        (course) => course.category === selectedCategory
      );
    }

    setFilteredCourses(filtered);
  }, [searchQuery, selectedCategory, courses]);

  return (
    <main className="flex-grow min-h-screen">
      <div className="py-20 gradient1">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
              Explore Our Courses
            </h1>
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap mb-8">
            <button
              className={`px-4 py-2 rounded-full mr-2 mb-2 transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow'
              }`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-full mr-2 mb-2 transition-all duration-300 ${
                selectedCategory === 'Programming Languages'
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow'
              }`}
              onClick={() => setSelectedCategory('Programming Languages')}
            >
              Programming Languages
            </button>
            <button
              className={`px-4 py-2 rounded-full mr-2 mb-2 transition-all duration-300 ${
                selectedCategory === 'AI/ML'
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow'
              }`}
              onClick={() => setSelectedCategory('AI/ML')}
            >
              AI/ML
            </button>
            {/* Add more category buttons as needed */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-2">{course.category}</p>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span>{course.rating}</span>
                  </div>
                  <p className="mb-4">{course.students} students</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 w-full">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;