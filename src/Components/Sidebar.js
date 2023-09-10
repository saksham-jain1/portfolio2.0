import { Flex, Icon, useColorMode } from "@chakra-ui/react";
import React from "react";
import {
  IoHomeOutline,
  IoPersonCircleOutline,
  IoRocketOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import { FaGraduationCap, FaTools } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";

const Sidebar = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      position="fixed"
      w="60px"
      left="0"
      direction="column"
      gap={5}
      top="80px"
      h="calc(100vh - 80px)"
      bg={colorMode === "light" ? "white" : "gray.700"}
      justifyContent="center"
      boxShadow="dark-lg"
      _hover={{ w: "210px" }}
      id="sidebar"
      zIndex="10"
    >
      <a href="#home">
        <Icon as={IoHomeOutline} boxSize={7} w="50px" ml="3px" />
        <span>Home</span>
      </a>
      <a href="#about">
        <Icon as={IoPersonCircleOutline} boxSize={7} w="50px" ml="3px" />
        <span>About</span>
      </a>
      <a href="#experince">
        <Icon
          as={AiOutlineFundProjectionScreen}
          boxSize={7}
          w="50px"
          ml="3px"
        />
        <span>Experience</span>
      </a>
      <a href="#academics">
        <Icon as={FaGraduationCap} boxSize={7} w="50px" ml="3px" />
        <span>Academics</span>
      </a>
      <a href="#projetcs">
        <Icon as={IoRocketOutline} boxSize={7} w="50px" ml="3px" />
        <span>Projects</span>
      </a>
      <a href="#skills">
        <Icon as={FaTools} boxSize={7} w="50px" ml="3px" />
        <span>Skills</span>
      </a>
      <a href="#achievements">
        <Icon as={IoTrophyOutline} boxSize={7} w="50px" ml="3px" />
        <span>Achivements</span>
      </a>
      <a href="#contact">
        <Icon as={MdContactMail} boxSize={7} w="50px" ml="3px" />
        <span>Contact Me</span>
      </a>
    </Flex>
  );
};

export default Sidebar;
