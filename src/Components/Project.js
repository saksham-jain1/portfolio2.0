import React, { useEffect, useState } from "react";
import { projectDetail } from "../data/data.js";
import {
  Box,
  Heading,
  Image,
  OrderedList,
  ListItem,
  Text,
  Tag,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [text, setText] = useState("Loaging...");

  useEffect(() => {
    const data = projectDetail.find((i) => i.id === id);
    if (data) setProject(data);
    else {
      setProject({});
      setText("⚠ Some Error Occured");
    }
  }, [id]);

  return (
    <>
      {project.name ? (
        <Box w="100%" minH="calc(100vh - 200px)">
          <Heading
            textAlign="center"
            py="1rem"
            borderBottom="2px solid Black"
            fontSize={{ base: "2rem", md: "4rem" }}
            mx={{ base: "1rem", md: "3rem" }}
          >
            {project?.name}
          </Heading>
          <Box p="5" textAlign="justify">
            <Image
              alt={project.name}
              src={project.img}
              maxW="700px"
              w="100%"
              mx="auto"
            />
            <Flex w="90%" mx="auto" justifyContent="center" gap="10" mt="5">
              <Button
                as={Link}
                isExternal
                href={project.link1}
                colorScheme="blue"
                maxW="400px"
                flex="1"
              >
                <BsGithub />
                &nbsp; Source Code
              </Button>
              {project.link2 && (
                <Button
                  as={Link}
                  isExternal
                  href={project.link2}
                  colorScheme="blue"
                  maxW="400px"
                  flex="1"
                >
                  <BiLinkExternal /> &nbsp; Live Link
                </Button>
              )}
            </Flex>
            <Text p={{ base: "5", md: "12" }}>{project.description}</Text>
            <Text
              fontSize="xl"
              fontWeight="semibold"
              px={{ base: "5", md: "12" }}
            >
              Project Status:{" "}
              <Tag
                size="lg"
                variant="solid"
                colorScheme={project.status === "Complete" ? "green" : "yellow"}
              >
                {project.status}
              </Tag>
            </Text>
            <Heading
              px={{ base: "5", md: "12" }}
              fontSize="2xl"
              pt="5"
              textDecor="underline"
            >
              Features:
            </Heading>
            <OrderedList px={{ base: "5", md: "12" }}>
              {project?.features?.map((i) => {
                return <ListItem m="3">{i}</ListItem>;
              })}
            </OrderedList>
            <Heading
              px={{ base: "5", md: "12" }}
              fontSize="2xl"
              textDecor="underline"
            >
              Technology Used:
            </Heading>
            <Box px={{ base: "5", md: "12" }}>
              {project?.tech?.map((i) => {
                return (
                  <Tag variant="solid" m="3" size="lg" colorScheme="green">
                    {i}
                  </Tag>
                );
              })}
            </Box>
            <Heading
              px={{ base: "5", md: "12" }}
              fontSize="2xl"
              textDecor="underline"
            >
              Future Scope:
            </Heading>
            <Text textAlign="justify" mt="5" px={{ base: "5", md: "12" }}>
              {project?.futureScope}
            </Text>
          </Box>
        </Box>
      ) : (
        <Box
          minH="calc(100vh - 300px)"
          textAlign="center"
          pt="36"
          fontSize="2xl"
        >
          {text}
        </Box>
      )}
    </>
  );
};

export default Project;
