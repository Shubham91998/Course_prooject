import {Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./components/Homepage/Home";
import About from "./components/About/About";
import FullCourseSection from "./components/FullCourseSection";
import InternHead from "./components/Internship/InternHead";
import MentorshipProgram from "./components/MentorsPage/MentorshipProgram";
import PlacementMain from "./components/PlacementTraining/PlacementMain";
import JobTrainingHome from "./components/JobTraining/JobTrainingHome";
import EventHome from "./components/Event/EventHome";
import JobHome from "./components/JobOpening/JobHome";
import BlogHome from "./components/Blog/BlogHome";
import ContectHome from "./components/Contect/ContectHome";
import CertificationHome from "./components/Certification/CertificationHome";

function App() {
  return (
    <>
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<FullCourseSection />} />
        <Route path="/internship" element={<InternHead />} />
        <Route path="/mentorship" element={<MentorshipProgram />} />
        <Route path="/placementtraining" element={<PlacementMain />} />
        <Route path="/jobtraining" element={<JobTrainingHome />} />
        <Route path="/event" element={<EventHome />} />
        <Route path="/job" element={<JobHome />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/contect" element={<ContectHome />} />
        <Route path="/certificateverification" element={<CertificationHome />} />

      </Routes>

    </div>
      

    </>
  );
}

export default App;
