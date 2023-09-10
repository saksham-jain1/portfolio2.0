import { Box, Heading, Tag, useColorMode } from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import animationData from "../assets/developer3.json";
import { MdWork } from "react-icons/md";
import data from "../data/data.js";

const Experience = () => {
  const { colorMode } = useColorMode();
  const experience = data.experience;
  return (
    <Box
      id="experince"
      w="100%"
      position="relative"
      display="flex"
      flexDir="column"
      flexWrap="wrap"
      p="3rem"
    >
      <Heading
        mb={{ base: "0", md: "0", lg: "5rem" }}
        textAlign="center"
        fontSize="4rem"
        zIndex="1"
        borderBottom="2px solid black"
      >
        Experince
      </Heading>
      <Box
        position={{ base: "relative", md: "relative", lg: "absolute" }}
        top="-1rem"
        right="3rem"
      >
        <Lottie animationData={animationData} />
      </Box>
      <VerticalTimeline lineColor="linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)">
        {experience.map((curr) => (
          <VerticalTimelineElement
            key={curr.id}
            className="vertical-timeline-element--education"
            contentStyle={
              colorMode === "dark"
                ? {
                    color: "black",
                  }
                : {
                    boxShadow: "0 0px 30px #000",
                  }
            }
            dateClassName={colorMode === "dark" ? "dark" : ""}
            date={curr.date}
            contentArrowStyle={
              colorMode === "dark"
                ? {
                    borderRight: ".6rem solid RGBA(255, 255, 255, 0.3)",
                  }
                : { borderRight: ".6rem solid #A0AEC0" }
            }
            iconStyle={{
              background: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
            }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">{curr.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">{curr.place}</h4>
            <p id="description">
              {curr.detail.map((i) => {
                return <li>{i}</li>;
              })}
            </p>
            <p>
              {curr.Tag.map((i) => {
                return (
                  <Tag
                    size="lg"
                    mx="2"
                    my="1"
                    px="3"
                    variant="solid"
                    colorScheme="whatsapp"
                  >
                    {i}
                  </Tag>
                );
              })}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Experience;
