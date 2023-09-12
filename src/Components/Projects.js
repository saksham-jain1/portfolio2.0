import { Button, Flex, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import "../index.css";
import Card from "./Card";
import data from "../data/data.js";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";

const Projects = ({ limit }) => {
  const ProjectDetail = limit ? data.projects.slice(0, limit) : data.projects;
  const navigate = useNavigate();
  return (
    <Flex id="projects" w="100%" position="relative" flexWrap="wrap" py="3rem">
      <Heading
        zIndex="1"
        textAlign="center"
        width="100%"
        mb="1rem"
        borderBottom="2px solid Black"
        fontSize={{ base: "3rem", md: "4rem" }}
        mx={{ base: "1rem", md: "3rem" }}
      >
        {limit ? "Projects" : "All Projects"}
      </Heading>
      <Flex wrap="wrap" gap="1rem" justifyContent="space-evenly">
        {ProjectDetail.map((curr, id) => {
          return <Card key={id} id={id} data={curr} />;
        })}
      </Flex>
      {limit && (
        <Button
          mx="12"
          mt="5"
          flex="1"
          colorScheme="yellow"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/projects");
          }}
          gap="5"
          size="lg"
        >
          See More Projects <Icon as={IoArrowForwardCircle} boxSize={8} />
        </Button>
      )}
    </Flex>
  );
};

export default Projects;
