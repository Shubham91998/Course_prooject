import ProgrammingCoursePage from "./components/Courses/ProgrammingCoursePage";

import Programming from "./components/CoreCourses/Programming";
import WebDevelopment from "./components/CoreCourses/WebDevelopment";
import DataScience from "./components/CoreCourses/DataScience";
import AIML from "./components/CoreCourses/AIML";
import CyberSecurity from "./components/CoreCourses/CyberSecurity";
import CSCore from "./components/CoreCourses/CSCore";
import DevOpsCloud from "./components/CoreCourses/DevOpsCloud";
import MobileDevelopment from "./components/CoreCourses/MobileDevelopment";
import CareerSkills from "./components/CoreCourses/CareerSkills";
import ProjectHub from "./components/CoreCourses/ProjectHub";
// ...existing code...
// ...existing code...
// ...existing code...
// ...existing code...
// ...existing code...
// ...existing code...
import AdvancedSearch from "./components/Search/AdvancedSearch";
import AnalyticsDashboard from "./components/Analytics/AnalyticsDashboard";
import APIDemo from "./components/API/APIDemo";
import ChatDemo from "./components/Chat/ChatDemo";
import PaymentDemo from "./components/Payment/PaymentDemo";
import {Routes, Route } from "react-router-dom";
import React from "react";
import { AuthProvider } from "./components/Auth/AuthContext.jsx";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AdminDashboard from "./components/Admin/AdminDashboard";

import Home from "./components/Homepage/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
import ExploreResearchPapers from "./components/ExploreResearchPapers.jsx";
import FullPaperView from "./components/FullPreview.jsx";
import PlacementTraining from "./components/PlacementTraining/PlacementTraining.jsx";
import CareerResources from "./components/CareerResources.jsx";
import FellowshipPage from "./components/FellowshipPage.jsx";
import AcademicMentorship from "./components/AcademicMentorship.jsx";


function App() {
  return (
    <AuthProvider>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gray-50">
        <Routes>
          =
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<FullCourseSection />} />
          {/* <Route path="/data-structures" element={<DataStructures />} /> */}
          {/* <Route path="/algorithms" element={<Algorithms />} /> */}
          <Route path="/languages" element={<Programming />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/ai-ml" element={<AIML />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/cs-core" element={<CSCore />} />
          <Route path="/devops-cloud" element={<DevOpsCloud />} />
          <Route path="/mobile-development" element={<MobileDevelopment />} />
          <Route path="/career-skills" element={<CareerSkills />} />
          <Route path="/project-hub" element={<ProjectHub />} />
          {/* <Route path="/dbms-os" element={<DBMSOS />} /> */}
          {/* <Route path="/ai-ml-dl" element={<AIMLDL />} /> */}
          {/* <Route path="/math-ml-dl" element={<MathMLDL />} /> */}
          <Route path="/internship" element={<InternHead />} />
          <Route path="/mentorship" element={<MentorshipProgram />} />
          <Route path="/placementtraining" element={<PlacementMain />} />
          <Route path="/jobtraining" element={<JobTrainingHome />} />
          <Route path="/events" element={<EventHome />} />
          <Route path="/job" element={<JobHome />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/contect" element={<ContectHome />} />
          <Route path="/certificateverification" element={<CertificationHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/search" element={<AdvancedSearch />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/api-demo" element={<APIDemo />} />
          <Route path="/chat-demo" element={<ChatDemo />} />
          <Route path="/payment-demo" element={<PaymentDemo />} />
          <Route path="/programming/python" element={<ProgrammingCoursePage />} />
          <Route path="/research-papers" element={<ExploreResearchPapers />} />
          <Route path="/research-papers/:id" element={<FullPaperView />} />
          <Route path="/placement-training" element={<PlacementTraining />} />
          <Route path="/career-resources" element={<CareerResources />} />
          <Route path="/doctoral-fellowships" element={<FellowshipPage />} />
          <Route path="/academic-mentorship" element={<AcademicMentorship />} />
          {/* Add more routes as needed */}

        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
