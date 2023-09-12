import React, { useEffect, useState } from "react";
import data from "../data/data.js";
import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(data.projects[id] || {});
  const [text, setText] = useState("Loaging...");

  useEffect(() => {
    if (id >= 0 && id <= data.projects.length)
      setProject(data.projects[id] || {});
    else {
      setProject({});
      setText("Some Error Occured");
    }
  }, [id]);

  return (
    <>
      {project.name ? (
        <Box w="100%">
          <Heading
            textAlign="center"
            py="1rem"
            borderBottom="2px solid Black"
            fontSize={{ base: "2rem", md: "4rem" }}
            mx={{ base: "1rem", md: "3rem" }}
            // px="0"
          >
            {project?.name}
          </Heading>
        </Box>
      ) : (
        <Box>{text}</Box>
      )}
    </>
  );
};

export default Project;
