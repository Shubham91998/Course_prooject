import React from 'react'

const ApplicationProcess = () => {
    const steps = [
        {
          number: 1,
          title: "Review Positions",
          description: "Explore our available internship opportunities and find the perfect fit for your skills and interests.",
        },
        {
          number: 2,
          title: "Prepare Documents",
          description: "Gather your resume, cover letter, transcripts, and letters of recommendation.",
        },
        {
          number: 3,
          title: "Submit Application",
          description: "Complete our online application form and upload all required documents.",
        },
        {
          number: 4,
          title: "Interview",
          description: "If selected, participate in our interview process to showcase your skills and passion.",
        },
      ];
    
      const keyDates = [
        {
          title: "Application Deadline",
          date: "[Insert Date]",
        },
        {
          title: "Interview Period",
          date: "[Insert Date Range]",
        },
        {
          title: "Internship Start Date",
          date: "[Insert Date]",
        },
        {
          title: "Internship Duration",
          date: "[Insert Duration, e.g., '10 weeks']",
        },
      ];
    
      return (
        <div className="bg-white py-16 mt-10 px-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Steps to Apply</h3>
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Key Dates</h3>
                <div className="bg-gray-100 rounded-lg p-6 space-y-4">
                  {keyDates.map((date, index) => (
                    <div key={index}>
                      <h4 className="font-semibold">{date.title}</h4>
                      <p>{date.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ApplicationProcess
