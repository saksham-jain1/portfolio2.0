import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import About from "./Components/About";
import Academics from "./Components/Academics";
import Experience from "./Components/Experience";
import { Route, Routes } from "react-router-dom";
import Project from "./Components/Project";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Cursor from "./Components/Cursor";
import Certificates from "./Components/Certificates";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

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
                <About />
                <Experience />
                <Academics />
                <Projects limit={6} />
                <Skills />
                <Certificates />
                <Contact />
              </>
            }
          />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
