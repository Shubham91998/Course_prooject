import React from 'react'

const MenteeExperiancesSections = () => {
  return (
    <>
      <div style={{ opacity: 1, transform: 'none' }}>
      <div className="bg-white py-16 px-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Mentee Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Repeat for each testimonial */}
            <div style={{ opacity: 1, transform: 'none' }}>
              <div className="bg-white shadow-md rounded-lg p-6" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                <p className="text-gray-600 mb-4">"The mentorship program opened doors I never thought possible. My mentor's guidance was invaluable!"</p>
                <p className="font-bold">Emily Chen</p>
                <p className="text-sm text-gray-500">AI Engineer at TechCorp</p>
              </div>
            </div>
            {/* Add more testimonials */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MenteeExperiancesSections
