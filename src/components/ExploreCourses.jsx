import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard'; // Ensure correct import

const ExploreCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/CourseList.json'); // Ensure the path is correct
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();

        // Ensure it's an array before setting state
        if (!Array.isArray(data)) {
          throw new Error('Fetched data is not an array');
        }

        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading courses...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-8 px-6 sm:px-16">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-[#374050]">Explore Courses</h1>
        <p className="text-lg text-[#798696] mt-4 mb-10">
          Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
        </p>
        
        {/* Check if courses exist before mapping */}
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No courses available.</p>
        )}

        <a className="paynow_btn bg-blue-600 hover:bg-blue-400 py-4 px-20 sm:px-32 rounded-4xl" href="/courses">
          <span>More Courses</span>
        </a>
      </div>
    </section>
  );
};

export default ExploreCourses;
