import { Button, Flex, Heading, Icon, Tag } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../index.css";
import Card from "./Card";
import { projectDetail } from "../data/data.js";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";

const Projects = ({ limit }) => {
  const [selector, setSelector] = useState("featured");
  const [projectDetails, setProjectDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (limit)
      setProjectDetails(
        projectDetail.filter((i) => i.type.includes(selector)).slice(0, limit)
      );
    else setProjectDetails(projectDetail);
  }, [limit, selector]);

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
      <Flex
        w="100%"
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap="5"
      >
        {!limit && (
          <Tag
            colorScheme={selector === "all" ? "green" : "gray"}
            onClick={() => setSelector("all")}
          >
            All
          </Tag>
        )}
        <Tag
          colorScheme={selector === "featured" ? "green" : "gray"}
          onClick={() => setSelector("featured")}
        >
          Featured
        </Tag>
        <Tag
          colorScheme={selector === "web" ? "green" : "gray"}
          onClick={() => setSelector("web")}
        >
          Web
        </Tag>
        <Tag
          colorScheme={selector === "dsa" ? "green" : "gray"}
          onClick={() => setSelector("dsa")}
        >
          DSA
        </Tag>
        <Tag
          colorScheme={selector === "game" ? "green" : "gray"}
          onClick={() => setSelector("game")}
        >
          Game
        </Tag>
        <Tag
          colorScheme={selector === "android" ? "green" : "gray"}
          onClick={() => setSelector("android")}
        >
          Android
        </Tag>
      </Flex>
      <Flex wrap="wrap" gap="1rem" w="100%" justifyContent="space-evenly">
        {projectDetails.map((curr) => {
          return <Card key={curr.id} data={curr} />;
        })}
      </Flex>
      {limit && (
        <Button
          mx="12"
          mt="5"
          colorScheme="yellow"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/projects");
          }}
          w="90%"
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
