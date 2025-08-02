import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth/useAuth';
import ExploreBlog from "./ExploreBlog";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null); // For mobile submenus
  const [openDropdown, setOpenDropdown] = useState(null); // For desktop dropdowns

  const menuItems = [
    {
      name: "Home",
      submenu: [
        { title: "Home", link: "/", description: "Go to homepage" },
        { title: "Explore Published Research Paper", link: "/research-papers", description: "Browse all research papers" },

      ],
    },
    {
      name: "Core Courses",
      submenu: [
        { title: "Programming", link: "/languages", description: "OOP, C, C++, Java, Python, R, MATLAB" },
        { title: "Web Development", link: "/web-development", description: "Frontend, Backend, Fullstack" },
        { title: "Data Science", link: "/data-science", description: "Data Science, Analytics, Visualization" },
        { title: "AI/ML", link: "/ai-ml", description: "Artificial Intelligence, Machine Learning, Deep Learning" },
        { title: "Cyber Security", link: "/cyber-security", description: "Security, Cryptography, Networks" },
        { title: "CS Core Subjects", link: "/cs-core", description: "Data Structures, Algorithms, DBMS, OS, CN, TOC" },
        { title: "DevOps & Cloud", link: "/devops-cloud", description: "DevOps, Cloud, CI/CD, AWS, Azure, GCP" },
        { title: "Mobile Development", link: "/mobile-development", description: "Android, iOS, Cross-platform" },
        { title: "Career Skills", link: "/career-skills", description: "Aptitude, Communication, Interview Prep" },
        { title: "Project Hub", link: "/project-hub", description: "Mini & Major Projects, Open Source" },
      ],
    },
    // ...existing code for other main categories...
    {
      name: "Internship",
      submenu: [
        { title: "Industrial Internship", link: "/internship", description: "Industry Experience" },
         { title: "Fellowships", link: "/doctoral-fellowships", description: "PhD Fellowships" },
        { title: "Training & Placement", link: "/live-classes", description: "Live Training Sessions" },
        { title: "Career Resources", link: "/career-resources", description: "Career Guidance" },
        { title: "Certificate Verification", link: "/certificateverification", description: "Verify Certificates" },
      ],
    },
    {
      name: "Mentorship",
      submenu: [
        { title: "Academic Mentorship", link: "/academic-mentorship", description: "Academic Guidance" },
        { title: "Industry Mentorship", link: "/industry-mentorship", description: "Industry Guidance" },
        { title: "Resume Submission", link: "/resume-submission", description: "Submit Resume" },
        { title: "Interview Preparation", link: "/interview-preparation", description: "Prepare for Interviews" },

      ],
    },
    {
      name: "More",
      submenu: [
       
        { title: "Events", link: "/events", description: "All Events" },
        { title: "Calendar & Registration", link: "/calendar", description: "Event Calendar" },
        { title: "Explore Blog", link: "/blog", description: "Read our latest articles" },
        { title: "Review & Comment System", link: "/blog/reviews", description: "Blog Reviews & Comments" },
        { title: "EWL Program", link: "/ewl-program", description: "EWL Program" },
        { title: "Regular Vacancies", link: "/vacancies", description: "Job Vacancies" },
        { title: "Contact Us", link: "/contact", description: "Contact Us" },
      ],
    },
  ];

  const handleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white p-4 w-full z-50 shadow-lg fixed top-0">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3561/3561639.png"
              alt="logo"
              className="h-10 w-10"
            />
            <div className="text-xl font-normal text-gray-900">Code Skills</div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name}>
                <a
                  className="cursor-pointer hover:bg-[#F8F9FA] hover:rounded-sm px-3 py-1 flex items-center"
                  onClick={() => handleDropdown(item.name)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleDropdown(item.name)
                  }
                  tabIndex="0"
                  role="button"
                  aria-expanded={openDropdown === item.name}
                >
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="ml-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                  </svg>
                </a>

                {/* Desktop Dropdown */}
                {openDropdown === item.name && (
                  <div className="absolute left-0 top-full w-screen bg-white shadow-lg">
                    <div className="max-w-7xl mx-auto p-4 flex">
                      {/* Left Side: Submenu */}
                      <div className="w-1/2 pr-4 border-r border-gray-200">
                        <ul className="grid grid-cols-2 space-y-2">
                          {menuItems
                            .find((menu) => menu.name === openDropdown)
                            ?.submenu.map((subItem, index) => (
                              <li key={index} className="py-2">
                                <a
                                  href={subItem.link}
                                  className="block p-2 hover:bg-gray-100 rounded-md"
                                >
                                  <h3 className="text-gray-700 font-medium">
                                    {subItem.title}
                                  </h3>
                                  <p className="text-gray-500 text-sm">
                                    {subItem.description}
                                  </p>
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>

                      {/* Right Side: Posts */}
                      <div className="w-1/2 pl-4">
                        <ExploreBlog />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ul>
          {/* Login/Logout Button */}
          <div className="hidden lg:block ml-4">
            {user ? (
              <button
                onClick={() => { logout(); navigate('/login'); }}
                className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-purple-700 hover:to-indigo-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="hidden lg:flex items-center space-x-4 mr-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-purple-700 hover:to-indigo-600 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Login Button (Desktop) */}
          {/* <div className="hidden lg:flex items-center space-x-4 mr-4 ">
            <a
              href="/login"
              className="px-6 py-1 bg-[#19B5FE] rounded-lg text-white font-medium"
            >
              Log in
            </a>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900 focus:outline-none h-8 w-8 hover:bg-gray-100 rounded-md"
            onClick={() => {
              setIsOpen(true);
              setOpenMobileSubmenu(null);
            }}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Side Drawer (Right Side) */}
      <div
        className={`fixed top-0 right-0 w-70 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="p-4 flex justify-between items-center">
          {openMobileSubmenu ? (
            <button
              className="text-gray-900 hover:bg-gray-200 p-2 rounded-md"
              onClick={() => setOpenMobileSubmenu(null)}
              aria-label="Back"
            >
              ← Back
            </button>
          ) : (
            <button
              className="text-gray-900 hover:bg-gray-200 p-2 rounded-md"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✖
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <ul className={`p-6 ${openMobileSubmenu ? "hidden" : "block"}`}>
          {menuItems.map((item) => (
            <li key={item.name} className="py-2">
              <button
                className="w-full text-left text-gray-700 text-lg font-medium flex justify-between items-center"
                onClick={() => setOpenMobileSubmenu(item.name)}
                onKeyPress={(e) =>
                  e.key === "Enter" && setOpenMobileSubmenu(item.name)
                }
                tabIndex="0"
                role="button"
                aria-expanded={openMobileSubmenu === item.name}
              >
                {item.name}→
              </button>
            </li>

          
            
          ))}

          <div className="flex flex-col items-center space-y-4 mt-10 mb-4">
            {user ? (
              <button
                onClick={() => { logout(); navigate('/login'); setIsOpen(false); }}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-purple-700 hover:to-indigo-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-purple-700 hover:to-indigo-600 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* <div className="items-center space-x-4 mr-4 mt-36 ml-20">
            <a
              href="/login"
              className="px-6 py-1 bg-[#19B5FE] rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-purple-700 hover:to-indigo-600 transition"
            >
              Log in
            </a>
          </div> */}
        </ul>
        

        {/* Submenu Panel */}
        {openMobileSubmenu && (
          <ul className="p-8">
            {menuItems
              .find((menu) => menu.name === openMobileSubmenu)
              ?.submenu.map((subItem, index) => (
                <li key={index} className="py-2">
                  {typeof subItem === "string" ? (
                    // Render string-based submenu items
                    <a
                      href="/"
                      className="text-gray-700 hover:text-blue-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem}
                    </a>
                  ) : (
                    // Render object-based submenu items
                    <Link
                      to={subItem.link}
                      className="hover:bg-stone-50 p-2 rounded-lg block"
                      onClick={() => {
                        setIsOpen(false);
                        setOpenMobileSubmenu(null);
                      }}
                    >
                      <h3 className="text-gray-700 font-medium">
                        {subItem.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {subItem.description}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        )}
      </div>

      {/* Overlay (Backdrop) */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={() => {
            setIsOpen(false);
            setOpenMobileSubmenu(null);
          }}
        ></div>
      )}
    </>
  );
}

export default Navbar;