import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import About from "./Components/About";

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
    <Box w="100vw">
      <Navbar percentage={percentage} />
      <Sidebar />
      <Box ml="60px" pt="80px" minH="100vh">
        <Home />
        <About />
      </Box>
    </Box>
  );
}

export default App;
