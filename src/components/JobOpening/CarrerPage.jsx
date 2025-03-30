import React from 'react';

// Job Card Component
const JobCard = ({ title, location, salary, type, isHiring, link }) => {
  return (
    <div className="p-4 w-[304px] sm:w-[404px] bg-white border border-gray-200 rounded-lg shadow-lg flex-shrink-0">
      <a href={link} className="block">
        {isHiring && (
          <div className="flex items-center text-green-600 font-medium mb-2">
            <span className="mr-2">🔥</span>
            <span>Actively hiring</span>
          </div>
        )}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <ul className="mb-4 text-gray-600">
          <li className="flex items-center mb-1">
            <span className="mr-2">📍</span>
            {location}
          </li>
          <li className="flex items-center">
            <span className="mr-2">💰</span>
            {salary}
          </li>
        </ul>
        <div className="flex justify-between items-center border-t pt-4 text-gray-700">
          <span className="text-xs uppercase font-semibold bg-gray-100 px-2 py-1 rounded-md">
            {type}
          </span>
          <span className="text-sm text-[#008BDC] font-medium">
            View details <span className="ml-1">➡️</span>
          </span>
        </div>
      </a>
    </div>
  );
};

// Job Section Component
const JobSection = ({ title, viewAllLink, items, type }) => {
  return (
    <div className="flex flex-col mb-10">
      <div className="flex flex-row justify-between my-10">
        <h4 className="text-xl font-semibold">{title}</h4>
        <a
          href={viewAllLink}
          className="text-[#008BDC] text-[16px] font-medium cursor-pointer"
        >
          See all {type}
        </a>
      </div>
      <div className="flex gap-5 overflow-x-auto hide-scrollbar w-full">
        {items.map((job, index) => (
          <JobCard key={index} {...job} type={type} />
        ))}
      </div>
    </div>
  );
};

// Main Careers Component
const CareerPage = () => {
  // Sample data - replace with your actual data or API fetch
  const jobOpenings = [
    {
      title: "Operations Associate",
      location: "Noida",
      salary: "5,00,000 /year",
      link: "/careers/operational-associate",
      isHiring: true,
    },
    {
      title: "Frontend Developer",
      location: "Remote",
      salary: "8,00,000 /year",
      link: "/careers/frontend-developer",
      isHiring: true,
    },
    {
      title: "Backend Engineer",
      location: "Bangalore",
      salary: "10,00,000 /year",
      link: "/careers/backend-engineer",
      isHiring: true,
    },
    {
      title: "UX Designer",
      location: "Mumbai",
      salary: "7,00,000 /year",
      link: "/careers/ux-designer",
      isHiring: true,
    },
  ];

  const internships = [
    {
      title: "Marketing Intern",
      location: "Remote",
      salary: "20,000 /month",
      link: "/careers/marketing-intern",
      isHiring: true,
    },
    {
      title: "Software Development Intern",
      location: "Noida",
      salary: "25,000 /month",
      link: "/careers/dev-intern",
      isHiring: true,
    },
    {
      title: "Data Science Intern",
      location: "Bangalore",
      salary: "30,000 /month",
      link: "/careers/data-science-intern",
      isHiring: true,
    },
  ];

  return (
    <div className="mt-[72px] max-w-6xl mx-auto px-6 lg:px-4 py-10">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Code Skills Careers</h1>
        <p className="text-gray-600 mt-2 max-w-3xl">
          We are actively recruiting talented individuals to join our team. If you
          are interested in working with us or have any questions about our
          current openings, please don't hesitate to reach out.
        </p>
      </header>

      <JobSection
        title="Jobs"
        viewAllLink="/careers/jobs"
        items={jobOpenings}
        type="jobs"
      />

      <JobSection
        title="Internships"
        viewAllLink="/careers/internships"
        items={internships}
        type="internships"
      />
    </div>
  );
};

export default CareerPage;