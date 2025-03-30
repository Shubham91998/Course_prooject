import React from 'react';
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";

const LiveEvent = () => {

  const members = [
    {
      name: "Kumari",
      experiences: [
        "Manager, Customer Success @ Keka",
        "Senior Associate Operations",
        "National Topper - Olympiad"
      ]
    },
    {
      name: "Rohit",
      experiences: [
        "Software Engineer with 5 years of experience",
        "Currently working at Microsoft",
        "Previously worked at Arcesium"
      ]
    }
  ];

  const reasons = [
    {
      title: "Explore the Future of Software Development",
      description: "Get a sneak peek into the exciting developments in the Software Development Job Market."
    },
    {
      title: "Key Skills for Success",
      description: "Learn the technical skills that aspiring software developers need to stay ahead in their careers."
    },
    {
      title: "Stay Updated with New Tech Stacks",
      description: "Discover how leading companies are changing their tech stacks to stay ahead."
    }
  ];

  return (
    <>
    <div className='mt-24 mx-5'>
    <div className="flex flex-col items-center">
      {/* Animated Heading */}
      <motion.h1 
        className="text-3xl font-bold my-5 text-blue-700"
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        Upcoming Events
      </motion.h1>

      {/* Animated Finger Down Icon */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <MoveDown size={40} className="text-blue-700" />
      </motion.div>
    </div>
    <h1 className='mb-5 text-2xl font-semibold'>Experience Learning from Industry Leaders for Free</h1>
    </div>
    <div className="flex flex-col justify-between w-full md:w-[50%] h-full p-[20px] sm:p-[60px] text-white  bg-black md:mx-80">
      {/* Header Section */}
      <div className="flex flex-row justify-between">
        <div className="flex gap-2 items-center">
          <h6 className="text-white text-sm px-2 py-1 rounded bg-[#d22d3a]">Live</h6>
          <span className="text-white w-[1px]" style={{ alignSelf: 'stretch', background: 'rgb(225, 229, 234)' }}></span>
          <h5 className="text-white">Events</h5>
        </div>
        <h6 className="text-sm px-2 py-1 text-[#007a51] rounded bg-[#d9fced]">Free Trial Class</h6>
      </div>

      {/* Event Title */}
      <h3 className="mt-5">Live Interview Prep : DSA Solve Along to crack SDE-2 Role</h3>

      {/* Instructors Section */}
      <div className="flex flex-col gap-5 mt-5">
        <h6 className="text-[#b2b9c7]">INSTRUCTOR</h6>
        <div className="flex flex-row gap-5 w-full text-white">
          <img
            src="https://code-skills-5644f.web.app/static/media/instructor.16eaa744ca83108b1ab6.jpeg"
            alt="instructor"
            className="w-[60px] h-[60px] rounded-[8px]"
          />
          <div className="flex flex-col justify-between">
            <h6>Kumari Akanksha</h6>
            <h6 className="text-[#b2b9c7] font-normal">Manager, Customer Success @ keka</h6>
          </div>
        </div>
        <div className="flex flex-row gap-5 w-full text-white">
          <img
            src="https://code-skills-5644f.web.app/static/media/event_organizer.2ca1dbf026041d4a0e00.png"
            alt="instructor"
            className="w-[60px] h-[60px] rounded-[8px]"
          />
          <div className="flex flex-col justify-between">
            <h6>Rohit Arora</h6>
            <h6 className="text-[#b2b9c7] font-normal">Senior Software Engineer @ Microsoft</h6>
          </div>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="flex flex-row justify-between mt-5">
        <div className="flex flex-row gap-5 text-white">
          <div
            className="rounded-[8px] w-[42px] h-[42px] flex items-center justify-center"
            style={{ backgroundColor: 'rgb(22, 25, 29)' }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-between">
            <h6 className="text-gray-400">DATE</h6>
            <h6 className="text-xs">Oct 25, 2024</h6>
          </div>
        </div>

        <div className="flex flex-row gap-5 text-white">
          <div
            className="rounded-[8px] w-[42px] h-[42px] flex items-center justify-center"
            style={{ backgroundColor: 'rgb(22, 25, 29)' }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-between">
            <h6 className="text-gray-400">TIME</h6>
            <h6 className="text-xs">8:00 PM</h6>
          </div>
        </div>
      </div>

      {/* Join Button */}
      <div className="w-[200px] mt-5">
        <a
          className="px-12 py-3 text-lg font-medium text-white duration-300 ease-in-out rounded md:text-xl bg-rose-500 hover:bg-rose-400"
          href="/"
        >
          Join Now
        </a>
      </div>
    </div>
    <p className='m-5 '> -{'>'} Join Rohit Arora, Senior Software Engineer at Microsoft, in this interactive Events where you’ll tackle real-world DSA problems faced by candidates applying for the SDE-2 role at top companies like PayPal. Learn key strategies, optimize your coding solutions, and gain insights into how to excel in technical interviews. Perfect for mid-level engineers aiming to level up their problem-solving skills and crack high-stakes interviews.</p>
    <div className="bg-[#EFF6FF] py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-2xl font-bold pb-6">Meet Kumari & Rohit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((member, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-3">{member.name}'s Experience:</h3>
              <ul className="mt-4 text-gray-800">
                {member.experiences.map((exp, idx) => (
                  <li key={idx} className="py-1">✅ {exp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-[#EFF6FF] py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-2xl font-bold pb-6 text-blue-700">Why Should You Join?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold text-blue-600">{reason.title}</h3>
              <p className="mt-3 text-gray-800">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default LiveEvent;