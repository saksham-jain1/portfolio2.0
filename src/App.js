import "./App.css";
import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Project from "./Components/Project";
import Cursor from "./Components/Cursor/Cursor";
import Footer from "./Components/Footer";

const About = React.lazy(() => import("./Components/About"));
const Academics = React.lazy(() => import("./Components/Academics"));
const Experience = React.lazy(() => import("./Components/Experience"));
const Projects = React.lazy(() => import("./Components/Projects"));
const Skills = React.lazy(() => import("./Components/Skills"));
const Certificates = React.lazy(() => import("./Components/Certificates"));
const Contact = React.lazy(() => import("./Components/Contact"));

function App() {
  const [percentage, setPercentage] = useState(0);
  window.onscroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setPercentage((winScroll / height) * 100);
  };

  return (
    <Box w="100vw" position="relative">
      <Cursor />
      <Navbar percentage={percentage} />
      <Sidebar />
      <Box ml="60px" mt="80px" w="calc(100vw - 60px)" minH="100vh">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Home />
                <React.Suspense fallback="Loadig....">
                  <About />
                  <Experience />
                  <Academics />
                  <Projects limit={6} />
                  <Skills />
                  <Certificates />
                  <Contact />
                </React.Suspense>
              </>
            }
          />
          <Route path="/project/:id" element={<Project />} />
          <Route
            path="/projects"
            element={
              <React.Suspense fallback="Loading....">
                <Projects />
              </React.Suspense>
            }
          />
        </Routes>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
