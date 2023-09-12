import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GrCertificate } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";
import { Box, Heading, useColorMode } from "@chakra-ui/react";
import Lottie from "lottie-react";
import animationData from "../assets/book-loading.json";
import data from "../data/data.js";

const Academics = () => {
  const { colorMode } = useColorMode();
  const academics = data.academics;
  return (
    <Box
      id="academics"
      w="100%"
      position="relative"
      display="flex"
      flexDir="column"
      flexWrap="wrap"
      px={{ base: "1rem", md: "3rem" }}
      py="3rem"
    >
      <Heading
        mb={{ base: "0", md: "0", lg: "5rem" }}
        textAlign="center"
        fontSize={{ base: "3rem", md: "4rem" }}
        zIndex="1"
        borderBottom="2px solid black"
      >
        Academics
      </Heading>
      <Box
        position={{ base: "relative", md: "relative", lg: "absolute" }}
        top="-3rem"
        right="3rem"
      >
        <Lottie animationData={animationData} />
      </Box>
      <VerticalTimeline lineColor="linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)">
        {academics.map((curr) => (
          <VerticalTimelineElement
            key={curr.id}
            className="vertical-timeline-element--education"
            contentStyle={
              colorMode === "dark"
                ? {
                    boxShadow: "0 0px 10px #fff",
                    color: "#000",
                  }
                : { boxShadow: "0 0px 10px #000", color: "#000" }
            }
            dateClassName={colorMode === "dark" ? "dark" : ""}
            contentArrowStyle={
              colorMode === "dark"
                ? {
                    borderRight: ".6rem solid RGBA(255, 255, 255, 0.3)",
                  }
                : { borderRight: ".6rem solid #fff" }
            }
            date={curr.date}
            iconStyle={{
              background: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
              color: "#000",
            }}
            icon={curr.icon ? <FaGraduationCap /> : <GrCertificate />}
          >
            <h3 className="vertical-timeline-element-title">{curr.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">{curr.place}</h4>
            <p id="description">{curr.detail}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Academics;
